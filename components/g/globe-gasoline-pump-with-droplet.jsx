import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfk_7v6jd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mfk_7v6jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:globe-gasoline-pump-with-droplet"} {...others} />);
}

export default Component;
