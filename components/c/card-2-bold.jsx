import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5nysxzsm.css';
import '../../css/b/bftzabcak.css';
import '../../css/z/zhscj931y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u5nysxzsm"/><path clip-rule="evenodd" class="bftzabcak"/><path class="zhscj931y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-2-bold"} {...others} />);
}

export default Component;
