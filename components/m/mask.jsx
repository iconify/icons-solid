import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8zp29bao.css';
import '../../css/d/dfctlpbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q8zp29bao"/><path class="dfctlpbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:mask"} {...others} />);
}

export default Component;
