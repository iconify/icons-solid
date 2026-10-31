import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf5x55bnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hf5x55bnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-backup-gloss"} {...others} />);
}

export default Component;
