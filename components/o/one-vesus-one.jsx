import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5p5qxm0i.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="p5p5qxm0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:one-vesus-one"} {...others} />);
}

export default Component;
