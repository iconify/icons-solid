import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2i6tnbfo.css';
import '../../css/s/sg1kq1bpe.css';
import '../../css/x/x-4wtmbgc.css';
import '../../css/z/z8r14fb0j.css';
import '../../css/z/zrod-4bjx.css';
import '../../css/l/lolphwbuf.css';
import '../../css/e/e1pzf2bzx.css';
import '../../css/a/azum99bhp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="m2i6tnbfo"/><path class="sg1kq1bpe"/><path class="x-4wtmbgc"/><path class="z8r14fb0j"/><path class="zrod-4bjx"/><path class="lolphwbuf"/><path class="e1pzf2bzx"/><path class="azum99bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-pouting-light-skin-tone"} {...others} />);
}

export default Component;
