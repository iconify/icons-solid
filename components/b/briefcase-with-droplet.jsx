import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/el1eu57nk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="el1eu57nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:briefcase-with-droplet"} {...others} />);
}

export default Component;
