import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cklkuz5cm.css';
import '../../css/u/u04mw40zl.css';
import '../../css/x/xh2h04buo.css';
import '../../css/j/jknzmzbge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cklkuz5cm wm-a"/><path class="u04mw40zl wm-a"/><path class="wm-a xh2h04buo"/><path class="jknzmzbge wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list"} {...others} />);
}

export default Component;
