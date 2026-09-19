import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn58-rbyn.css';
import '../../css/i/ihuhp8x1t.css';
import '../../css/f/f4v_liz2h.css';
import '../../css/t/tmksm5bqd.css';
import '../../css/p/poqn3h4kh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pn58-rbyn"/><path class="ihuhp8x1t"/><path class="f4v_liz2h"/><path class="tmksm5bqd"/><path class="poqn3h4kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:speaker"} {...others} />);
}

export default Component;
