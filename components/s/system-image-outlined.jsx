import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us2h0wbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="us2h0wbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:system-image-outlined"} {...others} />);
}

export default Component;
