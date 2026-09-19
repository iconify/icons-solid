import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/eemzleb_p.css';
import '../../css/r/rh_-z7bfj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="eemzleb_p"/><path class="rh_-z7bfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:level"} {...others} />);
}

export default Component;
