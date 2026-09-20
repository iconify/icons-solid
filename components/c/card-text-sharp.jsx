import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu5nr2b-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu5nr2b-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:card-text-sharp"} {...others} />);
}

export default Component;
