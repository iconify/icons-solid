import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi067zb2o.css';
import '../../css/v/vrgmnk6vg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mi067zb2o"/><path class="vrgmnk6vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-forked-locked-16"} {...others} />);
}

export default Component;
