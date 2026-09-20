import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw0b-1bmv.css';
import '../../css/w/wh-70pu7h.css';
import '../../css/d/d788uf64t.css';
import '../../css/o/oe3oz-bur.css';
import '../../css/a/amcescb3m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hw0b-1bmv"/><path class="wh-70pu7h"/><path class="d788uf64t"/><path class="oe3oz-bur"/><path class="amcescb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-sound"} {...others} />);
}

export default Component;
