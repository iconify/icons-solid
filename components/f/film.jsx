import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np3_u8p3f.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="np3_u8p3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:film"} {...others} />);
}

export default Component;
