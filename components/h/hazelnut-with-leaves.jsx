import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck9oiac6f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ck9oiac6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:hazelnut-with-leaves"} {...others} />);
}

export default Component;
