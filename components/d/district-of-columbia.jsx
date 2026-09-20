import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw-m6vb6x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yw-m6vb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:district-of-columbia"} {...others} />);
}

export default Component;
