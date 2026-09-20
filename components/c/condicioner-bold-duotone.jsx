import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdx5upbas.css';
import '../../css/y/ykggxvo8b.css';
import '../../css/e/eb3ikh_mw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cdx5upbas"/><path class="ykggxvo8b"/><path clip-rule="evenodd" class="eb3ikh_mw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:condicioner-bold-duotone"} {...others} />);
}

export default Component;
