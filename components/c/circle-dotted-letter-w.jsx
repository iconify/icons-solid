import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgcm3wb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bgcm3wb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-dotted-letter-w"} {...others} />);
}

export default Component;
