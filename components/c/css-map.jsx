import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyqzsr44f.css';
import '../../css/e/evgip2bmd.css';
import '../../css/e/e8wgpct6m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gyqzsr44f"/><path class="evgip2bmd"/><path class="e8wgpct6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:css-map"} {...others} />);
}

export default Component;
