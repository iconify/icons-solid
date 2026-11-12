import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzu_v_-nb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dzu_v_-nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wallabag-light"} {...others} />);
}

export default Component;
