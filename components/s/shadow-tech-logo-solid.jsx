import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahdk97bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahdk97bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:shadow-tech-logo-solid"} {...others} />);
}

export default Component;
