import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n71x7dmep.css';
import '../../css/p/pn1njdbsv.css';
import '../../css/e/egyo28bpl.css';
import '../../css/w/w27nj6boa.css';
import '../../css/e/ey8ys0b_w.css';
import '../../css/p/p7nckabqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n71x7dmep"/><path class="pn1njdbsv"/><path class="egyo28bpl"/><path class="w27nj6boa"/><path class="ey8ys0b_w"/><path class="p7nckabqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sakai"} {...others} />);
}

export default Component;
