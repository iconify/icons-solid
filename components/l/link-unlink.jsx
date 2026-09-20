import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au1n8ebss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="au1n8ebss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:link-unlink"} {...others} />);
}

export default Component;
