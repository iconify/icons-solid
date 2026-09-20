import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mti108opm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mti108opm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:volume-level-high-remix"} {...others} />);
}

export default Component;
