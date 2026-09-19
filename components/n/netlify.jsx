import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a8p2gebsn.css';
import '../../css/g/gcfp9hhah.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="a8p2gebsn"/><path class="gcfp9hhah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:netlify"} {...others} />);
}

export default Component;
