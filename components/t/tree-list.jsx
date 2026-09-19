import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/f2ss9xuss.css';
import '../../css/z/zeglg-bgn.css';
import '../../css/u/ufxux4d8l.css';
import '../../css/f/fgsli-b2d.css';
import '../../css/y/y3j9pl7tw.css';
import '../../css/b/bgfvkwbay.css';
import '../../css/g/gddrscchv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="f2ss9xuss"/><path class="zeglg-bgn"/><path class="ufxux4d8l"/><path class="fgsli-b2d"/><path class="y3j9pl7tw"/><path class="bgfvkwbay"/><path class="gddrscchv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tree-list"} {...others} />);
}

export default Component;
