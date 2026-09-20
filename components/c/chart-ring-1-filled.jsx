import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l67lj9z9h.css';
import '../../css/e/eucgmebad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l67lj9z9h"/><path class="eucgmebad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-ring-1-filled"} {...others} />);
}

export default Component;
