import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep9shg-nt.css';

const viewBox = {"width":48,"height":48};
const content = `<ellipse class="ep9shg-nt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:oval-one"} {...others} />);
}

export default Component;
