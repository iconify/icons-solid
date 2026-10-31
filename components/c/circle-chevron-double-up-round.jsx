import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdbc1eb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdbc1eb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-chevron-double-up-round"} {...others} />);
}

export default Component;
