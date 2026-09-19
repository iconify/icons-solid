import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vburjzbet.css';
import '../../css/d/dn60esb4g.css';
import '../../css/a/ac4y2vcgf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vburjzbet"/><path class="dn60esb4g"/><path class="ac4y2vcgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:printer-twotone"} {...others} />);
}

export default Component;
