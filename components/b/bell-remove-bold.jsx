import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fossymb9j.css';
import '../../css/n/n_fh7yyal.css';
import '../../css/y/yo32qf32j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fossymb9j"/><path clip-rule="evenodd" class="n_fh7yyal"/><path class="yo32qf32j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-remove-bold"} {...others} />);
}

export default Component;
