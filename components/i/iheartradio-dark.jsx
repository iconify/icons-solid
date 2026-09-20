import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz5y07b3v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bz5y07b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:iheartradio-dark"} {...others} />);
}

export default Component;
