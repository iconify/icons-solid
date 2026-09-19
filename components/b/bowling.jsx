import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/v1wdvab0g.css';
import '../../css/t/tpkjv3fwv.css';
import '../../css/j/jmwngv4zd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="v1wdvab0g"/><path class="tpkjv3fwv"/><path class="jmwngv4zd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bowling"} {...others} />);
}

export default Component;
