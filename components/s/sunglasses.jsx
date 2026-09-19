import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gshe_di8n.css';
import '../../css/q/q3p31cclv.css';
import '../../css/k/kadgmyb-f.css';
import '../../css/s/s99an3pus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gshe_di8n"/><path class="q3p31cclv"/><path class="kadgmyb-f"/><path class="s99an3pus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:sunglasses"} {...others} />);
}

export default Component;
