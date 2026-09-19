import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3cl1ueir.css';
import '../../css/r/r04um0bfu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q3cl1ueir"/><path class="r04um0bfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-cash"} {...others} />);
}

export default Component;
