import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/egh_kh2ze.css';
import '../../css/q/qysct-28c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="egh_kh2ze"/><path class="qysct-28c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:infinity-02"} {...others} />);
}

export default Component;
