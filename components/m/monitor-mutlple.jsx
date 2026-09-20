import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/z/zxx5oi.css';
import '../../css/t/trkq7y.css';
import '../../css/w/wu6yao.css';
import '../../css/f/f7aalh.css';
import '../../css/s/so-from-62.css';
import '../../css/d/d-1oz9bx.css';
import '../../css/d/d-fpnoxl.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-32.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c zxx5oi"/><path class="trkq7y"/><path class="a0m25c wu6yao"/><path class="a0m25c f7aalh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:monitor-mutlple"} {...others} />);
}

export default Component;
