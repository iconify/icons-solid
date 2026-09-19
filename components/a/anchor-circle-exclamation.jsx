import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8ssn3b7b.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="d8ssn3b7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:anchor-circle-exclamation"} {...others} />);
}

export default Component;
