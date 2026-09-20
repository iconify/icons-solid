import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf3pscb8r.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};
const content = `<path class="rf3pscb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:heart"} {...others} />);
}

export default Component;
