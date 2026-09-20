import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv5wk7tjf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cv5wk7tjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ice-cream-off"} {...others} />);
}

export default Component;
