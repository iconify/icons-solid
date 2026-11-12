import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycbseobgb.css';
import '../../css/e/e8nzz-tvq.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ycbseobgb"/><path class="e8nzz-tvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:stoat"} {...others} />);
}

export default Component;
