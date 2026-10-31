import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjvooib1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjvooib1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paragraph-duotone-round"} {...others} />);
}

export default Component;
