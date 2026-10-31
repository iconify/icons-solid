import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyk1s6ipo.css';
import '../../css/a/alb5d4f2o.css';
import '../../css/m/mar76sscm.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="cyk1s6ipo"/><path class="alb5d4f2o"/><path class="mar76sscm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:bhutan"} {...others} />);
}

export default Component;
