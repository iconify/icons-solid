import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i850pr6dl.css';
import '../../css/a/af6587_nt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i850pr6dl"/><path class="af6587_nt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:error-reporting"} {...others} />);
}

export default Component;
