import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k20xl2bcv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k20xl2bcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:low-vision-solid"} {...others} />);
}

export default Component;
