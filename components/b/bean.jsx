import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5eud-qii.css';
import '../../css/o/o3vojhb_l.css';
import '../../css/l/lkn0kjb2g.css';
import '../../css/w/w1bzx4bce.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="a5eud-qii"/><path class="o3vojhb_l"/><path class="lkn0kjb2g"/><path class="w1bzx4bce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:bean"} {...others} />);
}

export default Component;
