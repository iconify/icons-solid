import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buq6-w4ux.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="buq6-w4ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sitting-tank-toilet-with-droplet"} {...others} />);
}

export default Component;
