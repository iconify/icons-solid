import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9y54obih.css';
import '../../css/n/n0drb7f8q.css';
import '../../css/w/www_habqm.css';
import '../../css/j/jbenyobad.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="g9y54obih"/><path class="n0drb7f8q"/><path class="www_habqm"/><path class="jbenyobad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:die-4-duo"} {...others} />);
}

export default Component;
