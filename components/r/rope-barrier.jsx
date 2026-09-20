import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emvy9ge9i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="emvy9ge9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:rope-barrier"} {...others} />);
}

export default Component;
