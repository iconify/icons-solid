import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd_hi_bfp.css';

const viewBox = {"width":1026,"height":1024};
const content = `<path class="zd_hi_bfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pigpenz"} {...others} />);
}

export default Component;
