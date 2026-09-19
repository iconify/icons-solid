import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1fq_zfjj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m1fq_zfjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-uturn-left-down"} {...others} />);
}

export default Component;
