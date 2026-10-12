import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn6sw826p.css';
import '../../css/g/goglxpbft.css';
import '../../css/y/y1_hjm1gj.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qn6sw826p"/><path class="goglxpbft"/><path class="y1_hjm1gj"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:substation-check-48"} {...others} />);
}

export default Component;
