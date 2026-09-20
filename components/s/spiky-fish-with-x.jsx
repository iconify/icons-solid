import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfdcb-bgz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jfdcb-bgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spiky-fish-with-x"} {...others} />);
}

export default Component;
