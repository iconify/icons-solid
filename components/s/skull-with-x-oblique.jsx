import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj--35xot.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sj--35xot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:skull-with-x-oblique"} {...others} />);
}

export default Component;
