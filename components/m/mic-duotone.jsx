import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyqotpbcg.css';
import '../../css/a/aqfpmgb6v.css';
import '../../css/g/ghb7ubbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lyqotpbcg"><rect class="aqfpmgb6v"/><path class="ghb7ubbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mic-duotone"} {...others} />);
}

export default Component;
