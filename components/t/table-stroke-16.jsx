import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_z31w16g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t_z31w16g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:table-stroke-16"} {...others} />);
}

export default Component;
