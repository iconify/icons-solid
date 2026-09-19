import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eeo8jg0ef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eeo8jg0ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:terminal-filled"} {...others} />);
}

export default Component;
