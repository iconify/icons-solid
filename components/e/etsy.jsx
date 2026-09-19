import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv8zs-_oa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bv8zs-_oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:etsy"} {...others} />);
}

export default Component;
