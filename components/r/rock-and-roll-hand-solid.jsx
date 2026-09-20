import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z79ut5b1f.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="z79ut5b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:rock-and-roll-hand-solid"} {...others} />);
}

export default Component;
