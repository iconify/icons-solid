import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duuf9m24f.css';
import '../../css/g/gj0wcwb7j.css';
import '../../css/y/ym_5dj0al.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="duuf9m24f"/><path class="gj0wcwb7j"/><path class="ym_5dj0al"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:wifi-outline"} {...others} />);
}

export default Component;
