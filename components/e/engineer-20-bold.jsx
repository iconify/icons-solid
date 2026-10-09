import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y24w7huhx.css';
import '../../css/t/tqkbqbbzb.css';
import '../../css/g/g7s9nkxpw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y24w7huhx"/><path class="tqkbqbbzb"/><path class="g7s9nkxpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:engineer-20-bold"} {...others} />);
}

export default Component;
