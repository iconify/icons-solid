import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5u2o217q.css';
import '../../css/e/ejmr26sda.css';
import '../../css/o/oqxgm5b3x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="x5u2o217q"><path class="ejmr26sda"/><path class="oqxgm5b3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:adonis"} {...others} />);
}

export default Component;
