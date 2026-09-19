import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yb5w26egd.css';
import '../../css/k/khx4kzbyh.css';
import '../../css/b/bk45kcouj.css';
import '../../css/u/ua5929fxj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yb5w26egd"/><path class="khx4kzbyh"/><path class="bk45kcouj"/><path class="ua5929fxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-expand"} {...others} />);
}

export default Component;
