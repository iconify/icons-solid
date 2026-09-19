import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abx2bebyj.css';

const viewBox = {"width":384,"height":448};
const content = `<path class="abx2bebyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:arrow-left"} {...others} />);
}

export default Component;
