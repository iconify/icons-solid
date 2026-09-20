import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur2i2bh8f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ur2i2bh8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:delta-air-lines-light"} {...others} />);
}

export default Component;
