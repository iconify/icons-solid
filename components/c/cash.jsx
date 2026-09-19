import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jea2sgbeu.css';
import '../../css/t/ty_ptacek.css';
import '../../css/a/ac_65uciq.css';
import '../../css/k/k5t0n_cta.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jea2sgbeu"/><path class="ty_ptacek"/><circle class="ac_65uciq"/><path class="k5t0n_cta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:cash"} {...others} />);
}

export default Component;
