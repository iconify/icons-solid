import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rn0ebub3w.css';
import '../../css/q/qug2m8aox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="rn0ebub3w"/><path class="qug2m8aox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:calendar"} {...others} />);
}

export default Component;
