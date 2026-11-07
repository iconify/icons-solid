import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od8vdsbvc.css';
import '../../css/e/egvbavgae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="od8vdsbvc"/><path clip-rule="evenodd" class="egvbavgae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:copy-add-outline"} {...others} />);
}

export default Component;
