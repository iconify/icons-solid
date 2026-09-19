import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/memx0ebgv.css';

const viewBox = {"width":304,"height":512};
const content = `<path class="memx0ebgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:iphone"} {...others} />);
}

export default Component;
