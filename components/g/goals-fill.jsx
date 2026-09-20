import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp-b7wzwg.css';
import '../../css/w/wsg3jcbeq.css';
import '../../css/f/f430c2b9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yp-b7wzwg"/><path class="wsg3jcbeq"/><path class="f430c2b9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:goals-fill"} {...others} />);
}

export default Component;
