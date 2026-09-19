import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljxyob6qz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ljxyob6qz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:paragraph-center"} {...others} />);
}

export default Component;
