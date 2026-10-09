import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/s/sm2pr_bkh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="sm2pr_bkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clock-2-48"} {...others} />);
}

export default Component;
