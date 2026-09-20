import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu-50lb7t.css';
import '../../css/b/brgqastdd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iu-50lb7t"/><path class="brgqastdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:guitar"} {...others} />);
}

export default Component;
