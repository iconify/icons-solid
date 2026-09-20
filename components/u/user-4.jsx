import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae0kc3blq.css';
import '../../css/r/r8w6x7bjy.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="ae0kc3blq"/><path class="r8w6x7bjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:user-4"} {...others} />);
}

export default Component;
