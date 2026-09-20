import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aftye2b9i.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<path class="aftye2b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:battery-one-quarter"} {...others} />);
}

export default Component;
