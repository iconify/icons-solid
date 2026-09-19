import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0u-p9smw.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="t0u-p9smw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:suitcase-rolling"} {...others} />);
}

export default Component;
