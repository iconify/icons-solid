import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny-o07b9m.css';
import '../../css/s/synrefcoj.css';
import '../../css/t/t6x2t25-i.css';
import '../../css/w/w8xs_cusf.css';
import '../../css/g/gezk6bbut.css';
import '../../css/f/fk-0bzfrr.css';
import '../../css/a/anrpy964h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ny-o07b9m"/><path class="synrefcoj"/><path class="t6x2t25-i"/><path class="w8xs_cusf"/><path class="gezk6bbut"/><path class="fk-0bzfrr"/><path class="anrpy964h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:umbrella"} {...others} />);
}

export default Component;
