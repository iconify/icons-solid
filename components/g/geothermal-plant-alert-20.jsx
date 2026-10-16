import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah576liuy.css';
import '../../css/d/d2zrzusbd.css';
import '../../css/y/yt1kjcbtq.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ah576liuy"/><path class="d2zrzusbd"/><path class="yt1kjcbtq"/><path class="nq5_p_bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-plant-alert-20"} {...others} />);
}

export default Component;
