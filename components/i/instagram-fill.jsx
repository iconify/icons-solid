import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_0ldelps.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l_0ldelps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:instagram-fill"} {...others} />);
}

export default Component;
