import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lk887tbfi.css';
import '../../css/t/td4pmbm2c.css';
import '../../css/g/gufd03s5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lk887tbfi"/><rect class="td4pmbm2c"/><rect class="gufd03s5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:combine"} {...others} />);
}

export default Component;
