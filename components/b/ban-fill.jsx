import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1z-bmbon.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c1z-bmbon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:ban-fill"} {...others} />);
}

export default Component;
