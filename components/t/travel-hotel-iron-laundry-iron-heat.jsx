import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao8jgd4dm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ao8jgd4dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-hotel-iron-laundry-iron-heat"} {...others} />);
}

export default Component;
