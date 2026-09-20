import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-m9inbky.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d-m9inbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:pet-animals-bear"} {...others} />);
}

export default Component;
