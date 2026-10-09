import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qokocnbbw.css';
import '../../css/v/v9e56nbyl.css';
import '../../css/e/eswagv34a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qokocnbbw"/><path class="v9e56nbyl"/><path class="eswagv34a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:running-20"} {...others} />);
}

export default Component;
