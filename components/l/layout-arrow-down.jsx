import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwcy0pbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwcy0pbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:layout-arrow-down"} {...others} />);
}

export default Component;
