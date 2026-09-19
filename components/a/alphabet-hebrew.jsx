import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fh3267bdt.css';
import '../../css/i/i6e07yb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fh3267bdt"/><path class="i6e07yb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:alphabet-hebrew"} {...others} />);
}

export default Component;
