import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puo04wbqq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="puo04wbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:check"} {...others} />);
}

export default Component;
