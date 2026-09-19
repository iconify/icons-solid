import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz4t6jbgp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zz4t6jbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:tablet-landscape-sharp"} {...others} />);
}

export default Component;
