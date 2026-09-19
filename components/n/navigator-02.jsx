import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ocdg62b7r.css';
import '../../css/p/pmgkdmbqo.css';
import '../../css/x/x1-s1-bdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ocdg62b7r"/><path class="pmgkdmbqo"/><path class="x1-s1-bdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:navigator-02"} {...others} />);
}

export default Component;
