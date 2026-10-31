import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8gg2pb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8gg2pb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:outdent-duotone-round"} {...others} />);
}

export default Component;
