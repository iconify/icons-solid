import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bs49p9bxw.css';
import '../../css/d/d8701eqsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bs49p9bxw"/><path class="d8701eqsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cheese"} {...others} />);
}

export default Component;
