import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7ceh0i-d.css';
import '../../css/t/tpz2tpc2u.css';
import '../../css/k/km321-agy.css';
import '../../css/p/pzl2fwqre.css';
import '../../css/y/y81tdp-pd.css';
import '../../css/w/wzztqc65i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v7ceh0i-d"/><path class="tpz2tpc2u"/><path class="km321-agy"/><circle class="pzl2fwqre"/><circle class="y81tdp-pd"/><path class="wzztqc65i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:video-projector"} {...others} />);
}

export default Component;
