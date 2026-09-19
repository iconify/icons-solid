import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x18z7kh9p.css';

const viewBox = {"width":961,"height":1025};
const content = `<path class="x18z7kh9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:paperclip"} {...others} />);
}

export default Component;
