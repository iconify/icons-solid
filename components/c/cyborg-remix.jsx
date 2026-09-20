import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgvl3po6e.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="jgvl3po6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:cyborg-remix"} {...others} />);
}

export default Component;
