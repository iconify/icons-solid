import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/attk0tb6r.css';
import '../../css/n/n2ghnjbko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="attk0tb6r"/><path class="n2ghnjbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:jug"} {...others} />);
}

export default Component;
