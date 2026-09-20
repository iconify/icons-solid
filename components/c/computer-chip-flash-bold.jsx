import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4qw2cbsy.css';
import '../../css/k/k_r5mab3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4qw2cbsy"/><path class="k_r5mab3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:computer-chip-flash-bold"} {...others} />);
}

export default Component;
