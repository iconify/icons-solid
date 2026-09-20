import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s2xk5-bxo.css';
import '../../css/k/k0wxbe_le.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s2xk5-bxo"/><rect class="k0wxbe_le"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hard-hat"} {...others} />);
}

export default Component;
