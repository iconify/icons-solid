import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh9q8b7lx.css';
import '../../css/g/gtdmtvp5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rh9q8b7lx"/><path class="gtdmtvp5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:copy-outline"} {...others} />);
}

export default Component;
