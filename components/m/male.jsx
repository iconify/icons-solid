import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuh6h7j6z.css';
import '../../css/x/xfomdp99f.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="vuh6h7j6z"/><circle class="xfomdp99f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:male"} {...others} />);
}

export default Component;
