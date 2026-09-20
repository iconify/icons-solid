import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m63h_6bsj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="m63h_6bsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:line-arrow-rotate-left-2-remix"} {...others} />);
}

export default Component;
