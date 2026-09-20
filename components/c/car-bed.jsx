import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x34kw6p8w.css';
import '../../css/b/bb0f4cb0y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x34kw6p8w"/><path class="bb0f4cb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:car-bed"} {...others} />);
}

export default Component;
