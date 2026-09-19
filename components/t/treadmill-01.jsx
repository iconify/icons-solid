import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y03i1hb0a.css';
import '../../css/e/eg1b7tind.css';
import '../../css/a/a_1sqryty.css';
import '../../css/n/n7g3ami9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="y03i1hb0a"/><path class="eg1b7tind"/><path class="a_1sqryty"/><path class="n7g3ami9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:treadmill-01"} {...others} />);
}

export default Component;
