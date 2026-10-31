import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_bwp5i_z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t_bwp5i_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:picnic-table-in-eaved-gabled-building"} {...others} />);
}

export default Component;
