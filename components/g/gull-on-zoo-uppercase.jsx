import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldrvy3bsz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ldrvy3bsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gull-on-zoo-uppercase"} {...others} />);
}

export default Component;
