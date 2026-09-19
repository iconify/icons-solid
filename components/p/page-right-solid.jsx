import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv_df9bwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mv_df9bwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:page-right-solid"} {...others} />);
}

export default Component;
