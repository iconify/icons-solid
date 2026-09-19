import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyneov3ti.css';
import '../../css/j/jiglepbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer iyneov3ti"/><path class="duoicon-primary-layer jiglepbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:clock"} {...others} />);
}

export default Component;
