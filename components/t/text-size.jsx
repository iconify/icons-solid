import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we6n59b6n.css';
import '../../css/n/nmu_9kcuc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="we6n59b6n"/><path class="nmu_9kcuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:text-size"} {...others} />);
}

export default Component;
