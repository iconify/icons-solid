import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_80cab1p.css';
import '../../css/g/gt9eulz_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_80cab1p"/><path class="gt9eulz_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:currency-note"} {...others} />);
}

export default Component;
