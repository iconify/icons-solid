import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp4swqbih.css';
import '../../css/e/eqknogzek.css';
import '../../css/y/yt45lhzdn.css';
import '../../css/g/gtw35cbvt.css';
import '../../css/i/igjaafi1z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kp4swqbih"/><path class="eqknogzek"/><path class="yt45lhzdn"/><path class="gtw35cbvt"/><path class="igjaafi1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:3d-ica"} {...others} />);
}

export default Component;
