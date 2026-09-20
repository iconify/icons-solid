import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btq4q2n4i.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="btq4q2n4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:justice-scale-1"} {...others} />);
}

export default Component;
