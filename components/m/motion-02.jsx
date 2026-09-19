import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x5kn6sevq.css';
import '../../css/h/h0frr_tyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="x5kn6sevq"/><path class="h0frr_tyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:motion-02"} {...others} />);
}

export default Component;
