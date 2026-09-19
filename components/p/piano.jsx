import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_xjfiztf.css';

const viewBox = {"width":961,"height":1024};
const content = `<path class="h_xjfiztf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:piano"} {...others} />);
}

export default Component;
