import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4o2u6vyt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x4o2u6vyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:right-two-headed-line"} {...others} />);
}

export default Component;
