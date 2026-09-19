import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imj4d0blw.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="imj4d0blw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:instagram"} {...others} />);
}

export default Component;
