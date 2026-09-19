import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzhtr9y7k.css';
import '../../css/z/zmbgj-x1z.css';
import '../../css/v/vyf6lgyjm.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lzhtr9y7k"/><path class="zmbgj-x1z"/><path class="vyf6lgyjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:timer"} {...others} />);
}

export default Component;
