import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anms5nb2o.css';
import '../../css/e/epn6lpbho.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="anms5nb2o"/><path class="epn6lpbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:people-circle-outline"} {...others} />);
}

export default Component;
