import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi1rxacoc.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="xi1rxacoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:camera-alt-f"} {...others} />);
}

export default Component;
