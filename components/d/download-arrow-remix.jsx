import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfl_0pbxy.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mfl_0pbxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:download-arrow-remix"} {...others} />);
}

export default Component;
