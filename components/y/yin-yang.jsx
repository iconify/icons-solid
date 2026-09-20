import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/m/mwqyepbww.css';
import '../../css/i/ia0_hgbwx.css';
import '../../css/p/py15g5w5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="shu3xdl9q"/><circle class="mwqyepbww"/><path class="ia0_hgbwx"/><circle class="py15g5w5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:yin-yang"} {...others} />);
}

export default Component;
