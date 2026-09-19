import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2wo1bdya.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="j2wo1bdya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:shopping-bag-1"} {...others} />);
}

export default Component;
