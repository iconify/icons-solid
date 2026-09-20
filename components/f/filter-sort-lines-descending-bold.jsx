import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc06x8qpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xc06x8qpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:filter-sort-lines-descending-bold"} {...others} />);
}

export default Component;
