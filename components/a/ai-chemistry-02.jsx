import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/et-3szwqq.css';
import '../../css/w/wts3x0b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="et-3szwqq"/><path class="wts3x0b9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-chemistry-02"} {...others} />);
}

export default Component;
