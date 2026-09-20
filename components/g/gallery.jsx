import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb40d305w.css';
import '../../css/y/y850ku1de.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="mb40d305w"/><path class="y850ku1de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:gallery"} {...others} />);
}

export default Component;
