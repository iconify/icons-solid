import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c59wd2bpx.css';
import '../../css/m/m6cog7b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c59wd2bpx"/><path class="m6cog7b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bottle-line"} {...others} />);
}

export default Component;
