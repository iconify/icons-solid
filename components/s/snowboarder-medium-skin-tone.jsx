import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9pq-abme.css';
import '../../css/p/punkoxecs.css';
import '../../css/p/pxqia9bxh.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/t/t0pwn3udk.css';
import '../../css/d/diehlxhqz.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="k9pq-abme"><circle class="punkoxecs"/><path class="pxqia9bxh"/></g><g class="x8poo_bjf"><circle class="punkoxecs"/><path class="t0pwn3udk"/><path class="diehlxhqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:snowboarder-medium-skin-tone"} {...others} />);
}

export default Component;
