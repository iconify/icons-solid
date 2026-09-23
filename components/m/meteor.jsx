import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u75rk3mdx.css';
import '../../css/b/bkuyfq66o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="u75rk3mdx"/><path class="bkuyfq66o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:meteor"} {...others} />);
}

export default Component;
