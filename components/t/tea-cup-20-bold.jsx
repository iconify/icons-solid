import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9wh86bhu.css';
import '../../css/u/udfv0g6tu.css';
import '../../css/v/viull-tzw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c9wh86bhu"/><path class="udfv0g6tu"/><path class="viull-tzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tea-cup-20-bold"} {...others} />);
}

export default Component;
