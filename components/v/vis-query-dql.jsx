import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8s6xvu0y.css';
import '../../css/a/av8fdd_xa.css';
import '../../css/r/rs66qrblo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w8s6xvu0y"/><path class="av8fdd_xa"/><path clip-rule="evenodd" class="rs66qrblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-query-dql"} {...others} />);
}

export default Component;
