import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4nnu3b-h.css';
import '../../css/s/s_rjlabju.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i4nnu3b-h"/><path class="s_rjlabju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:linkexternal"} {...others} />);
}

export default Component;
