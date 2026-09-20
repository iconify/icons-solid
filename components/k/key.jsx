import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afsuv1qvc.css';
import '../../css/f/f7z4__6af.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="afsuv1qvc"/><circle class="f7z4__6af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:key"} {...others} />);
}

export default Component;
