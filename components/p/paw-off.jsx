import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz1r5ijls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mz1r5ijls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:paw-off"} {...others} />);
}

export default Component;
