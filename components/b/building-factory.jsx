import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bf-owdb6q.css';
import '../../css/t/tk0i2gzee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bf-owdb6q"/><path class="tk0i2gzee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-factory"} {...others} />);
}

export default Component;
