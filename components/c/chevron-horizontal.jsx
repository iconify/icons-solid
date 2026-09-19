import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_ncw9bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_ncw9bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:chevron-horizontal"} {...others} />);
}

export default Component;
