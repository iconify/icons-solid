import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5joo8lyw.css';
import '../../css/b/bsixd3bce.css';
import '../../css/k/k10_f-5gw.css';
import '../../css/z/z95z1jbrs.css';
import '../../css/r/r-ea6qbvu.css';
import '../../css/o/o7z8hpfju.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k5joo8lyw"/><path class="bsixd3bce"/><path class="k10_f-5gw"/><path class="z95z1jbrs"/><path class="r-ea6qbvu"/><path class="o7z8hpfju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:postgresql-wordmark"} {...others} />);
}

export default Component;
