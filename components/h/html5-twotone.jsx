import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1pu1rrxi.css';
import '../../css/g/gmc9imcga.css';
import '../../css/y/y192wnsah.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="j1pu1rrxi"/><path class="gmc9imcga"/><path class="y192wnsah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:html5-twotone"} {...others} />);
}

export default Component;
