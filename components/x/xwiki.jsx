import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1915qdig.css';
import '../../css/z/zk4-ubrqe.css';
import '../../css/s/s7lootb5u.css';
import '../../css/i/ijonc3b4m.css';
import '../../css/r/riykjxbfq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s1915qdig"/><path class="zk4-ubrqe"/><path class="s7lootb5u"/><path class="ijonc3b4m"/><path class="riykjxbfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:xwiki"} {...others} />);
}

export default Component;
