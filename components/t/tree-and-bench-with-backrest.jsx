import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4i2n-v3c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v4i2n-v3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tree-and-bench-with-backrest"} {...others} />);
}

export default Component;
