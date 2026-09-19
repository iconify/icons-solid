import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l38d-nb8d.css';
import '../../css/t/t4d1h1icc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="l38d-nb8d"/><path class="t4d1h1icc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-factorial-bold"} {...others} />);
}

export default Component;
