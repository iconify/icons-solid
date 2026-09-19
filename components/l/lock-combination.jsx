import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwi2mlprc.css';
import '../../css/m/mp-hme0is.css';
import '../../css/k/kozuxzbrc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dwi2mlprc"/><path class="mp-hme0is"/><circle class="kozuxzbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:lock-combination"} {...others} />);
}

export default Component;
