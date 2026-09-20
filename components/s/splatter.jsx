import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptgkkvq3k.css';
import '../../css/a/ayeb2h67y.css';
import '../../css/f/f9bro21bv.css';
import '../../css/a/at_tg2jla.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ptgkkvq3k"/><path class="ayeb2h67y"/><path class="f9bro21bv"/><path class="at_tg2jla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:splatter"} {...others} />);
}

export default Component;
