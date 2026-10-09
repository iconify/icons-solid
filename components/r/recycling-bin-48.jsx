import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m99dslsql.css';
import '../../css/d/dju16bcaj.css';
import '../../css/q/q5tmzt_ie.css';
import '../../css/v/vq5ukvb_p.css';
import '../../css/v/vg8_g8bwx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m99dslsql"/><path class="dju16bcaj"/><path class="q5tmzt_ie"/><path class="vq5ukvb_p"/><path class="vg8_g8bwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recycling-bin-48"} {...others} />);
}

export default Component;
