import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew1hd7bhz.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="ew1hd7bhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:birthday-cake"} {...others} />);
}

export default Component;
