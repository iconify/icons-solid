import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xypximg7a.css';
import '../../css/b/bqvhui-iq.css';
import '../../css/k/k167alb-k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xypximg7a"/><path class="bqvhui-iq"/><path class="k167alb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:home-48"} {...others} />);
}

export default Component;
