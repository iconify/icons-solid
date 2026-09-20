import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4b0s9bmn.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="t4b0s9bmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:portrait-lock-solid"} {...others} />);
}

export default Component;
