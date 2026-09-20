import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnqtpl8nr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hnqtpl8nr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:behance-fill"} {...others} />);
}

export default Component;
