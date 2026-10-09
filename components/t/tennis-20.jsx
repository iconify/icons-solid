import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj7s50_rj.css';
import '../../css/m/m_z0n_ibe.css';
import '../../css/r/rv5p4kcxf.css';
import '../../css/n/n3itrrb9j.css';
import '../../css/v/vae4a6bxa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wj7s50_rj"/><path class="m_z0n_ibe"/><path class="rv5p4kcxf"/><path class="n3itrrb9j"/><path class="vae4a6bxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tennis-20"} {...others} />);
}

export default Component;
