import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm3xmebmn.css';
import '../../css/g/gykrvcc7h.css';
import '../../css/u/uz7k7mbin.css';
import '../../css/b/b4wag86-y.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qm3xmebmn"/><path class="gykrvcc7h"/><path class="uz7k7mbin"/><path class="b4wag86-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:insurance-twotone"} {...others} />);
}

export default Component;
