import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu410db3i.css';
import '../../css/u/u4lsadx-b.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="mu410db3i"/><path class="u4lsadx-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:control-lun-solid"} {...others} />);
}

export default Component;
