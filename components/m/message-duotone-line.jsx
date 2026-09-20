import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/n/nrwjwh1ea.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/va_ad4haj.css';
import '../../css/m/mam9x2b6y.css';
import '../../css/c/cj684s-mr.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGNzYcbbPI" class="n1mjunbsu"><path class="nrwjwh1ea"/></mask><g class="h01tyzbfu"><rect class="va_ad4haj"/><path class="mam9x2b6y"/><path mask="url(#SVGNzYcbbPI)" class="cj684s-mr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:message-duotone-line"} {...others} />);
}

export default Component;
