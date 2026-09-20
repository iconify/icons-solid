import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gdts-2bop.css';
import '../../css/k/kv7u9jh9z.css';
import '../../css/b/bbd8wkbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gdts-2bop"/><path class="kv7u9jh9z"/><path class="bbd8wkbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gauge-dashboard"} {...others} />);
}

export default Component;
