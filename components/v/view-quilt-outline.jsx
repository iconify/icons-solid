import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmz1f45_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pmz1f45_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:view-quilt-outline"} {...others} />);
}

export default Component;
