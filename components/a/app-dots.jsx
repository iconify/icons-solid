import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmkfoccpl.css';
import '../../css/w/wllfbt0-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer fmkfoccpl"/><path class="duoicon-secondary-layer wllfbt0-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:app-dots"} {...others} />);
}

export default Component;
