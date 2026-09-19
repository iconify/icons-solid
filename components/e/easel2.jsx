import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2d7j5b7e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m2d7j5b7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:easel2"} {...others} />);
}

export default Component;
