import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnh7u9f3r.css';
import '../../css/t/t0uauacth.css';
import '../../css/j/jnh3n5bgw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gnh7u9f3r"/><path class="t0uauacth"/><path class="jnh3n5bgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:gleam-config"} {...others} />);
}

export default Component;
