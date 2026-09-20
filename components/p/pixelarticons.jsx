import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7qcs1agw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f7qcs1agw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:pixelarticons"} {...others} />);
}

export default Component;
