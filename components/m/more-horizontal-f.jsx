import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmamuaclh.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-9};
const content = `<path class="bmamuaclh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:more-horizontal-f"} {...others} />);
}

export default Component;
