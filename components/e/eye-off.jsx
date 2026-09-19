import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7slzmblf.css';
import '../../css/y/ywurx5bka.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q7slzmblf"/><path class="ywurx5bka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:eye-off"} {...others} />);
}

export default Component;
