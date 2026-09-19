import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb7uk-s2q.css';
import '../../css/j/jlc7xm8ek.css';
import '../../css/i/imatvgb6b.css';
import '../../css/v/vzvy3h3wk.css';
import '../../css/f/fbdus0b7r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kb7uk-s2q"/><path class="jlc7xm8ek"/><path class="imatvgb6b"/><circle class="vzvy3h3wk"/><path class="fbdus0b7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bow"} {...others} />);
}

export default Component;
