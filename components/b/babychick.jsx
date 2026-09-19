import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsoix_jkw.css';
import '../../css/f/f_yv0yb3g.css';
import '../../css/p/pr0kgdb0u.css';
import '../../css/c/cvziz8baj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rsoix_jkw"/><path class="f_yv0yb3g"/><path class="pr0kgdb0u"/><path class="cvziz8baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:babychick"} {...others} />);
}

export default Component;
