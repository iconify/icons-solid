import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1_mt0b0i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z1_mt0b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:building-with-plant"} {...others} />);
}

export default Component;
