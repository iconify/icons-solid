import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrnno4lpy.css';
import '../../css/q/qr4uhui_c.css';
import '../../css/f/fk2gskbbg.css';
import '../../css/v/v0e3hepfi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jrnno4lpy"/><path class="qr4uhui_c"/><path class="fk2gskbbg"/><path class="v0e3hepfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chalet-48-bold"} {...others} />);
}

export default Component;
