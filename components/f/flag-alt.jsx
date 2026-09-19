import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aku1-wbhy.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="aku1-wbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:flag-alt"} {...others} />);
}

export default Component;
