import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkpxsvb_g.css';
import '../../css/o/ot6g9xx6o.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gkpxsvb_g"/><path class="ot6g9xx6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:chat-line-square"} {...others} />);
}

export default Component;
