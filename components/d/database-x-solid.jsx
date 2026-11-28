import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crs_a_bfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crs_a_bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:database-x-solid"} {...others} />);
}

export default Component;
