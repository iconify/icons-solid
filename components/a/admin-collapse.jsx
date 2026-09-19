import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbs-mwb5g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zbs-mwb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:admin-collapse"} {...others} />);
}

export default Component;
