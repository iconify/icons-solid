import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iebp_9cqm.css';
import '../../css/i/ilr4rab5a.css';
import '../../css/a/a4bu9h0na.css';
import '../../css/p/pskf2nb6x.css';

const viewBox = {"width":32,"height":33};
const content = `<g class="iebp_9cqm"><path class="ilr4rab5a"/><path class="a4bu9h0na"/><path class="pskf2nb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:layers-dark"} {...others} />);
}

export default Component;
