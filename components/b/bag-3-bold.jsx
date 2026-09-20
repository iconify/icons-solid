import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhl3owb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bhl3owb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-3-bold"} {...others} />);
}

export default Component;
