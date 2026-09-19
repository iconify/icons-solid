import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukw6yum5g.css';

const viewBox = {"width":480,"height":512};
const content = `<path class="ukw6yum5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:transgender-alt"} {...others} />);
}

export default Component;
