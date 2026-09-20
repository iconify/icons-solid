import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqkdk71em.css';
import '../../css/q/q_fcpqb1m.css';
import '../../css/c/cyq_l98zi.css';
import '../../css/f/fv-_47b6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oqkdk71em"/><path class="q_fcpqb1m"/><path class="cyq_l98zi"/><path class="fv-_47b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:l2"} {...others} />);
}

export default Component;
