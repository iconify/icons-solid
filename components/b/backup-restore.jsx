import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmy94ub0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jmy94ub0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:backup-restore"} {...others} />);
}

export default Component;
