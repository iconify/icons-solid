import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltsvmv17u.css';
import '../../css/p/pvoys4t1r.css';
import '../../css/n/nr1kobbpa.css';
import '../../css/r/rgdhmtlro.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ltsvmv17u"/><path class="pvoys4t1r"/><path class="nr1kobbpa"/><path class="ouiIcon__fillSecondary rgdhmtlro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-watches"} {...others} />);
}

export default Component;
