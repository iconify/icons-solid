import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urnyzzbwd.css';
import '../../css/a/as20a8ocv.css';
import '../../css/m/m5m17-bys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="urnyzzbwd"/><path class="as20a8ocv"/><path class="m5m17-bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pzp"} {...others} />);
}

export default Component;
