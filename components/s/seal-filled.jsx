import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_i_gwb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_i_gwb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:seal-filled"} {...others} />);
}

export default Component;
