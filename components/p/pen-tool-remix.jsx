import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjq8q_b4d.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mjq8q_b4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:pen-tool-remix"} {...others} />);
}

export default Component;
