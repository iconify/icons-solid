import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f78o86b_t.css';
import '../../css/z/zjk6qwb9u.css';
import '../../css/m/mv1gubbor.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f78o86b_t"/><path class="zjk6qwb9u"/><path class="mv1gubbor"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:substation-alert-48-bold"} {...others} />);
}

export default Component;
