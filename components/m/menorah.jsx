import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a8aefvb5d.css';
import '../../css/u/u95v_ob6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a8aefvb5d"/><path class="u95v_ob6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:menorah"} {...others} />);
}

export default Component;
