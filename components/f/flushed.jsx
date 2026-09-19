import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awf1i5bbl.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="awf1i5bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:flushed"} {...others} />);
}

export default Component;
