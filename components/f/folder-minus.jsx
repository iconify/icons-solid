import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o291p-a2z.css';
import '../../css/c/cd4vo0b5j.css';
import '../../css/l/lho28-27t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o291p-a2z"/><path class="cd4vo0b5j"/><path class="lho28-27t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:folder-minus"} {...others} />);
}

export default Component;
