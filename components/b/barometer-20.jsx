import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/t/td2ls7bcf.css';
import '../../css/e/e8w13wbpk.css';
import '../../css/m/m9xus8rcd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="td2ls7bcf"/><path class="e8w13wbpk"/><path class="m9xus8rcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barometer-20"} {...others} />);
}

export default Component;
