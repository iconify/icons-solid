import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5ydwh_7g.css';
import '../../css/m/mgkytmtsq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u5ydwh_7g"/><path class="mgkytmtsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:anchor-top-middle-16"} {...others} />);
}

export default Component;
