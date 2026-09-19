import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d48o06bxz.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="d48o06bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:resize-full"} {...others} />);
}

export default Component;
