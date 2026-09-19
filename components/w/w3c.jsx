import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg_99vq4p.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="cg_99vq4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:w3c"} {...others} />);
}

export default Component;
