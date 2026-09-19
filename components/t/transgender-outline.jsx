import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3pg_fb6f.css';
import '../../css/z/zunt0gbkl.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="r3pg_fb6f"/><path class="zunt0gbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:transgender-outline"} {...others} />);
}

export default Component;
