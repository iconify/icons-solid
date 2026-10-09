import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo3chwbhv.css';
import '../../css/c/co_00rbvb.css';
import '../../css/u/uwt2fqejw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wo3chwbhv"/><path class="co_00rbvb"/><path class="uwt2fqejw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-cable-20-bold"} {...others} />);
}

export default Component;
