import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbtomab4q.css';
import '../../css/t/tytji7n_q.css';
import '../../css/e/egb1_lbof.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="lbtomab4q"/><path class="tytji7n_q"/><path class="egb1_lbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbpad"} {...others} />);
}

export default Component;
