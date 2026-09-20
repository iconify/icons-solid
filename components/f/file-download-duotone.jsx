import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekghdyv4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ekghdyv4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:file-download-duotone"} {...others} />);
}

export default Component;
