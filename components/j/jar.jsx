import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/howr7c5eb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="howr7c5eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:jar"} {...others} />);
}

export default Component;
