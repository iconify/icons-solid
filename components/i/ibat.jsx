import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdk2ryvgs.css';
import '../../css/o/oxo9nw_dc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bdk2ryvgs"/><path class="oxo9nw_dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ibat"} {...others} />);
}

export default Component;
