import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/is4q307ov.css';
import '../../css/b/butkcj-uk.css';
import '../../css/o/osjgjnbpm.css';

const viewBox = {"width":260,"height":260};
const content = `<g class="ft5dv1b6b"><defs><clipPath id="SVGw8YLyc4C"><rect class="is4q307ov"/></clipPath></defs><g clip-path="url(#SVGw8YLyc4C)"><path class="butkcj-uk"/><path class="osjgjnbpm"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hyperdx"} {...others} />);
}

export default Component;
