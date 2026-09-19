import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puuv1qb4b.css';
import '../../css/l/ley2zzm8d.css';
import '../../css/e/ezne57fdv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="puuv1qb4b"/><path class="ley2zzm8d"/><path class="ezne57fdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:magnifying-glass-tilted-left"} {...others} />);
}

export default Component;
