import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz93zk_kf.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="zz93zk_kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:largebluecircle"} {...others} />);
}

export default Component;
