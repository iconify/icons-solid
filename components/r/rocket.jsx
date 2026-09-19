import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odd7xt2tc.css';
import '../../css/j/jt3_i6qzm.css';
import '../../css/l/l_3itzz6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="odd7xt2tc"/><circle class="jt3_i6qzm"/><path class="l_3itzz6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:rocket"} {...others} />);
}

export default Component;
