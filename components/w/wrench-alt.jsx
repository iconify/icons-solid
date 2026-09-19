import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwg2n69-k.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="jwg2n69-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:wrench-alt"} {...others} />);
}

export default Component;
