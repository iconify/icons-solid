import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7n7f3ipf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7n7f3ipf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:vimeo-fill"} {...others} />);
}

export default Component;
