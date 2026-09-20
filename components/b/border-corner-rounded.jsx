import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyik3ye0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oyik3ye0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:border-corner-rounded"} {...others} />);
}

export default Component;
