import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw3h4vb5b.css';
import '../../css/e/eyfhqgb-h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cw3h4vb5b"/><path class="eyfhqgb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tidyquest-dark"} {...others} />);
}

export default Component;
