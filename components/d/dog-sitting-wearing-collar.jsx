import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km0y7xdxb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="km0y7xdxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dog-sitting-wearing-collar"} {...others} />);
}

export default Component;
