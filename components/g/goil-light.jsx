import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1g88eb3w.css';

const viewBox = {"width":326,"height":329};
const content = `<path clip-rule="evenodd" class="x1g88eb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:goil-light"} {...others} />);
}

export default Component;
