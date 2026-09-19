import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npdwm_bbw.css';

const viewBox = {"width":32,"height":32};
const content = `<path clip-rule="evenodd" class="npdwm_bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:old-man"} {...others} />);
}

export default Component;
