import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv842m9yr.css';
import '../../css/r/rv_tlwbie.css';
import '../../css/s/s9cmspn9i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yv842m9yr"/><path class="rv_tlwbie"/><path class="s9cmspn9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:canal-lock-20-bold"} {...others} />);
}

export default Component;
