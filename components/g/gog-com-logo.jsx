import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pu6xz3bxa.css';
import '../../css/t/tk9to7i5w.css';
import '../../css/m/mizf5lk8d.css';
import '../../css/m/m0fei_bda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="pu6xz3bxa"/><path class="tk9to7i5w"/><path class="mizf5lk8d"/><path class="m0fei_bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gog-com-logo"} {...others} />);
}

export default Component;
