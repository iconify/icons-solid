import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cc3rssvob.css';
import '../../css/q/q5gmmg-hk.css';
import '../../css/x/xm6p5pb8v.css';
import '../../css/z/zwqiglb-s.css';
import '../../css/g/gmkotgmme.css';
import '../../css/j/j7e4i4crf.css';
import '../../css/u/uzkl7wbyc.css';
import '../../css/c/cszpzhbay.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="cc3rssvob"/><path class="q5gmmg-hk"/><path class="xm6p5pb8v"/><path class="zwqiglb-s"/><path class="gmkotgmme"/><path class="j7e4i4crf"/><path class="uzkl7wbyc"/><path class="cszpzhbay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:selected-focus"} {...others} />);
}

export default Component;
