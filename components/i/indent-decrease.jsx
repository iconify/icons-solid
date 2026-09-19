import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_ilgq-0y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b_ilgq-0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:indent-decrease"} {...others} />);
}

export default Component;
