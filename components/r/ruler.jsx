import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to63unrdf.css';
import '../../css/s/s8zdzyb4g.css';
import '../../css/q/q6h2ko6vi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="to63unrdf wm-k"/><path class="s8zdzyb4g wm-k"/><path class="q6h2ko6vi wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:ruler"} {...others} />);
}

export default Component;
