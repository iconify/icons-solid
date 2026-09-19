import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g90c98oen.css';
import '../../css/t/tk5zlblso.css';
import '../../css/v/vpcsadb2x.css';
import '../../css/m/m1hlppt_z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g90c98oen"/><circle class="tk5zlblso"/><circle class="vpcsadb2x"/><path class="m1hlppt_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:integrated-webcam"} {...others} />);
}

export default Component;
