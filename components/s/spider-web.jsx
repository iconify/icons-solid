import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eyuign3qk.css';
import '../../css/h/hg9d3hbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eyuign3qk"/><path class="hg9d3hbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:spider-web"} {...others} />);
}

export default Component;
