import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh10_4bfa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eh10_4bfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-chevron-down-fill"} {...others} />);
}

export default Component;
