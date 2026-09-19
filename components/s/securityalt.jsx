import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-0h0cb7y.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="g-0h0cb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:securityalt"} {...others} />);
}

export default Component;
