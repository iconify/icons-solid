import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kfswb1b-d.css';
import '../../css/p/puidc5v1k.css';
import '../../css/o/oohberbnf.css';
import '../../css/r/r86xtobab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="kfswb1b-d wm-shadow"/><path class="puidc5v1k wm-shadow"/><path class="oohberbnf"/><path class="r86xtobab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chevron-right"} {...others} />);
}

export default Component;
