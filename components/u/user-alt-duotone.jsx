import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2irj2bce.css';
import '../../css/z/z28cvgb5x.css';
import '../../css/t/ti2wvyuux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h2irj2bce"/><path class="z28cvgb5x"/><path class="ti2wvyuux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:user-alt-duotone"} {...others} />);
}

export default Component;
