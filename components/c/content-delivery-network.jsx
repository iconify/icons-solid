import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh5bazbdh.css';
import '../../css/t/t_f65iten.css';
import '../../css/f/faheoc_mo.css';
import '../../css/d/dw8g4-vla.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="uh5bazbdh"/><circle class="t_f65iten"/><path class="faheoc_mo"/><path class="dw8g4-vla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:content-delivery-network"} {...others} />);
}

export default Component;
