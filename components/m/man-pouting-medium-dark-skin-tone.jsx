import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2i6tnbfo.css';
import '../../css/d/d6nqyfrqn.css';
import '../../css/b/bmqnpzgwh.css';
import '../../css/z/z8r14fb0j.css';
import '../../css/z/zrod-4bjx.css';
import '../../css/l/lolphwbuf.css';
import '../../css/e/e1pzf2bzx.css';
import '../../css/a/azum99bhp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="m2i6tnbfo"/><path class="d6nqyfrqn"/><path class="bmqnpzgwh"/><path class="z8r14fb0j"/><path class="zrod-4bjx"/><path class="lolphwbuf"/><path class="e1pzf2bzx"/><path class="azum99bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-pouting-medium-dark-skin-tone"} {...others} />);
}

export default Component;
