import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bntc-zdzf.css';

const viewBox = {"width":529,"height":1000};
const content = `<path class="bntc-zdzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:right-dir"} {...others} />);
}

export default Component;
