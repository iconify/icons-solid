import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irz5s5bib.css';
import '../../css/i/i6sdoobhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="irz5s5bib"/><path class="i6sdoobhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:calendar-alt"} {...others} />);
}

export default Component;
