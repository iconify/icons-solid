import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijssdnbls.css';
import '../../css/m/m6zv5vbnf.css';
import '../../css/j/jqr1k9a2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ijssdnbls"/><path class="m6zv5vbnf"/><path class="jqr1k9a2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-2-bold"} {...others} />);
}

export default Component;
