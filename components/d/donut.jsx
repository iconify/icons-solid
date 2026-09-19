import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt9eulz_o.css';
import '../../css/o/o0m5y054f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gt9eulz_o"/><path class="o0m5y054f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:donut"} {...others} />);
}

export default Component;
