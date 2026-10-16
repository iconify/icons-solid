import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq2op-bzr.css';
import '../../css/r/rucx1acha.css';
import '../../css/p/pkqibmblv.css';
import '../../css/k/kg7y9mgki.css';
import '../../css/s/sy560ubcd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gq2op-bzr"/><path class="rucx1acha"/><path class="pkqibmblv"/><path class="kg7y9mgki"/><path class="sy560ubcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moped-20-bold"} {...others} />);
}

export default Component;
