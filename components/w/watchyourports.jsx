import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6b-2c14q.css';
import '../../css/y/yg-3rkiwq.css';
import '../../css/k/kjd9sg23k.css';
import '../../css/c/cq325diaz.css';
import '../../css/a/a2n9rvbrb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e6b-2c14q"/><path class="yg-3rkiwq"/><path class="kjd9sg23k"/><path class="cq325diaz"/><path class="a2n9rvbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:watchyourports"} {...others} />);
}

export default Component;
