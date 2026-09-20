import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snm97r-0o.css';
import '../../css/x/xjs59m2vp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="snm97r-0o"/><path clip-rule="evenodd" class="xjs59m2vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:home-4-flat"} {...others} />);
}

export default Component;
