import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6u3v9bup.css';
import '../../css/a/a7jpzibdv.css';
import '../../css/l/l0p7own5h.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i6u3v9bup"/><path class="a7jpzibdv"/><path clip-rule="evenodd" class="l0p7own5h"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:radio-circle"} {...others} />);
}

export default Component;
