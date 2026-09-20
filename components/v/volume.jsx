import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a1ajnuogj.css';
import '../../css/g/g_o0p8bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="a1ajnuogj"/><path class="g_o0p8bbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:volume"} {...others} />);
}

export default Component;
