import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfcaho9pp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vfcaho9pp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dropbox-flat"} {...others} />);
}

export default Component;
