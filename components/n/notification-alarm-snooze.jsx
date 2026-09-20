import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cs62cpblw.css';
import '../../css/k/kzzzp7bim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cs62cpblw"/><path class="kzzzp7bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:notification-alarm-snooze"} {...others} />);
}

export default Component;
