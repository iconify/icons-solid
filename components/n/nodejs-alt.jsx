import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhb4zef1o.css';
import '../../css/y/yd_4pqb_b.css';
import '../../css/d/di3r7bqli.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nhb4zef1o"/><path class="yd_4pqb_b"/><path class="di3r7bqli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:nodejs-alt"} {...others} />);
}

export default Component;
