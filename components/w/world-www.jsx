import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j9xrx4b-n.css';
import '../../css/p/pjoafe4jy.css';
import '../../css/e/e3q9k7bzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j9xrx4b-n"/><path class="pjoafe4jy"/><path class="e3q9k7bzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-www"} {...others} />);
}

export default Component;
