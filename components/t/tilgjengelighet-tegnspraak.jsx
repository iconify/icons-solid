import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa5b_b6dr.css';
import '../../css/r/rvpd67bjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aa5b_b6dr"/><path class="rvpd67bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tilgjengelighet-tegnspraak"} {...others} />);
}

export default Component;
