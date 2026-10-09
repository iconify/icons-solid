import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghq0elqau.css';
import '../../css/f/fzoldhk-f.css';
import '../../css/f/fz14dobdd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ghq0elqau"/><path class="fzoldhk-f"/><path class="fz14dobdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:time-of-use-48-bold"} {...others} />);
}

export default Component;
