import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vwvqxvbit.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/d/ddje9ibbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vwvqxvbit"/><circle class="h_tsn8bxt"/><path class="ddje9ibbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:razor-blade"} {...others} />);
}

export default Component;
