import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/birm0db0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="birm0db0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:xbox"} {...others} />);
}

export default Component;
