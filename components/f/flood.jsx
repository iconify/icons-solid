import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj54ll90s.css';
import '../../css/n/nxzuqf7tr.css';
import '../../css/r/rds-sv7pp.css';
import '../../css/u/uyrysvt3k.css';
import '../../css/l/lhiif9hem.css';
import '../../css/q/q3g9qac4w.css';
import '../../css/g/gsb2qybke.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sj54ll90s"/><path class="nxzuqf7tr"/><path class="rds-sv7pp"/><path class="uyrysvt3k"/><path class="lhiif9hem"/><path class="q3g9qac4w"/><path class="gsb2qybke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flood"} {...others} />);
}

export default Component;
