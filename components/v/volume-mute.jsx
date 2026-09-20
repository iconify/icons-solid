import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a1ajnuogj.css';
import '../../css/z/ze6rn-poo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="a1ajnuogj"/><path class="ze6rn-poo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:volume-mute"} {...others} />);
}

export default Component;
