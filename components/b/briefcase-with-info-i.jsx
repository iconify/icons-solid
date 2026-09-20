import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m28-rvb-j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m28-rvb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:briefcase-with-info-i"} {...others} />);
}

export default Component;
