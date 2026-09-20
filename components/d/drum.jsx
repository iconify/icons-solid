import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/isv7l49qo.css';
import '../../css/v/va4yoc50j.css';
import '../../css/t/trsr16b4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="isv7l49qo"/><ellipse class="va4yoc50j"/><path class="trsr16b4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:drum"} {...others} />);
}

export default Component;
