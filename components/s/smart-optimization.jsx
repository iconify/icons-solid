import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6g817zjy.css';
import '../../css/f/ftdatwbuu.css';
import '../../css/h/hx8ukgbtk.css';
import '../../css/a/arfkx6ssl.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="o6g817zjy"><path class="ftdatwbuu"/><path class="hx8ukgbtk"/><path class="arfkx6ssl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:smart-optimization"} {...others} />);
}

export default Component;
