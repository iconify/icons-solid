import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epn4iybfc.css';
import '../../css/u/uk-710b6s.css';
import '../../css/g/g-doz0n7w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="epn4iybfc"/><path class="uk-710b6s"/><path class="g-doz0n7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bezier-square-duo"} {...others} />);
}

export default Component;
