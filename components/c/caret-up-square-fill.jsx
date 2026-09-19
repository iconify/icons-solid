import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0yx3epbf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m0yx3epbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:caret-up-square-fill"} {...others} />);
}

export default Component;
