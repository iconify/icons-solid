import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcfs-nj7d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hcfs-nj7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:moving-platform"} {...others} />);
}

export default Component;
