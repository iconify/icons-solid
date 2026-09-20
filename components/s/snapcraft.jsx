import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv6_idbzi.css';
import '../../css/h/hcv589g6p.css';

const viewBox = {"width":1.28,"height":1.28};
const content = `<path class="vv6_idbzi"/><path class="hcv589g6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:snapcraft"} {...others} />);
}

export default Component;
