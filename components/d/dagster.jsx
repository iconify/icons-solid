import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y084-wbbv.css';
import '../../css/h/hvnqnlbmu.css';
import '../../css/j/js9j7cc9u.css';
import '../../css/b/bj-8yzcrx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y084-wbbv"/><path class="hvnqnlbmu"/><path class="js9j7cc9u"/><path class="bj-8yzcrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dagster"} {...others} />);
}

export default Component;
