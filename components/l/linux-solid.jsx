import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1m5k6buc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z1m5k6buc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:linux-solid"} {...others} />);
}

export default Component;
