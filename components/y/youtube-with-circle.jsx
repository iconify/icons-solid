import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5i-kqbtq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m5i-kqbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:youtube-with-circle"} {...others} />);
}

export default Component;
