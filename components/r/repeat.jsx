import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyczhacmu.css';
import '../../css/o/ofvh391ie.css';
import '../../css/a/a4f1lt8mi.css';
import '../../css/n/ndw1d7h0o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wyczhacmu"/><path class="ofvh391ie"/><path class="a4f1lt8mi"/><path class="ndw1d7h0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:repeat"} {...others} />);
}

export default Component;
