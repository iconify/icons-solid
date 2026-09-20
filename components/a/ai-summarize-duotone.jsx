import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfgdjs2-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfgdjs2-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-summarize-duotone"} {...others} />);
}

export default Component;
