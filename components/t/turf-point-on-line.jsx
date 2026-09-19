import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg9h-rbgi.css';
import '../../css/h/hnwh_8bzy.css';
import '../../css/g/gqrul3baz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="jg9h-rbgi"/><circle class="hnwh_8bzy"/><path class="gqrul3baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-point-on-line"} {...others} />);
}

export default Component;
