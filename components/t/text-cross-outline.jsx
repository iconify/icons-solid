import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq578qb5q.css';
import '../../css/f/f3nkh-bxi.css';
import '../../css/d/d32vjom7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wq578qb5q"/><path class="f3nkh-bxi"/><path class="d32vjom7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-cross-outline"} {...others} />);
}

export default Component;
