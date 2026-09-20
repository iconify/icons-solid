import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me00cjb6q.css';
import '../../css/d/dezr6ts0k.css';
import '../../css/w/wdholibql.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="me00cjb6q"/><path class="dezr6ts0k"/><path class="wdholibql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:vue-config"} {...others} />);
}

export default Component;
