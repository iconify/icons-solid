import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vznrtdi4f.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k6062qpxe.css';
import '../../css/a/a5h0guzij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vznrtdi4f"/><g class="dt0cm9dhy primary"><path class="k6062qpxe"/><path class="a5h0guzij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folders-duo"} {...others} />);
}

export default Component;
