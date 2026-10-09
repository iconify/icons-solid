import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7ei9-u4f.css';
import '../../css/t/trjhecjvw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v7ei9-u4f"/><path class="trjhecjvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pyramid-20"} {...others} />);
}

export default Component;
