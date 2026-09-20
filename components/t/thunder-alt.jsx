import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez8bopsco.css';
import '../../css/i/io2oo-spz.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ez8bopsco"/><path class="io2oo-spz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:thunder-alt"} {...others} />);
}

export default Component;
