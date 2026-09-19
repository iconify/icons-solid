import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/cymxjyb3f.css';
import '../../css/w/wpbu29bzw.css';
import '../../css/y/y46majbrr.css';
import '../../css/a/a7htqlawj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="cymxjyb3f"/><path class="wpbu29bzw"/><path class="y46majbrr"/><path class="a7htqlawj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:respect"} {...others} />);
}

export default Component;
