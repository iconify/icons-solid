import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2bhn2v8h.css';
import '../../css/w/whvapjd8j.css';
import '../../css/o/o_af29byo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u2bhn2v8h"/><path class="whvapjd8j"/><path class="o_af29byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:satellite-20"} {...others} />);
}

export default Component;
