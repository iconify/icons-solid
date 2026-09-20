import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6yoqshmw.css';
import '../../css/z/z_e2vybpv.css';
import '../../css/g/g1_c90b_m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v6yoqshmw"/><path class="z_e2vybpv"/><path class="g1_c90b_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:puppet"} {...others} />);
}

export default Component;
