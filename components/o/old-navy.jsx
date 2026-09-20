import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2qsx7eke.css';
import '../../css/e/e32k5njcx.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="e2qsx7eke"/><path class="e32k5njcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:old-navy"} {...others} />);
}

export default Component;
