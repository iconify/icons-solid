import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nybo0qh_t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nybo0qh_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fli-so-light"} {...others} />);
}

export default Component;
