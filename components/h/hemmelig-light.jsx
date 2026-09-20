import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_63gm0nw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_63gm0nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hemmelig-light"} {...others} />);
}

export default Component;
