import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn45hr9iw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rn45hr9iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cloud-lock-outline"} {...others} />);
}

export default Component;
