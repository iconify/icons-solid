import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heaukdbvp.css';
import '../../css/y/yh3b42bep.css';
import '../../css/v/vbk2l6bze.css';
import '../../css/h/hdr9guboz.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/d/d6hsydbgj.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/d/d7qm3jbci.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="heaukdbvp"/><path class="yh3b42bep"/><path class="vbk2l6bze"/><path class="hdr9guboz"/><path class="ps7z7wb7n"/><path class="d6hsydbgj"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="d7qm3jbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-bald-light"} {...others} />);
}

export default Component;
