import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/s/slegk3slk.css';
import '../../css/s/s02d0qbow.css';
import '../../css/p/pcpc27ofz.css';
import '../../css/n/ngds8nbum.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g transform="translate(3 3)"><path clip-rule="evenodd" class="slegk3slk"/><circle class="s02d0qbow"/><circle class="pcpc27ofz"/><circle class="ngds8nbum"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:text-bubble-circle-filled"} {...others} />);
}

export default Component;
