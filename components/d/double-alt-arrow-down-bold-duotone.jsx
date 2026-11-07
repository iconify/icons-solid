import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sownw2b9k.css';
import '../../css/e/e-elr2cua.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sownw2b9k"/><path clip-rule="evenodd" class="e-elr2cua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-down-bold-duotone"} {...others} />);
}

export default Component;
