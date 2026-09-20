import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5yc4abgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r5yc4abgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ban-fill"} {...others} />);
}

export default Component;
