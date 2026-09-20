import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s2xh7utdb.css';
import '../../css/u/ut3jwge_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s2xh7utdb"/><circle class="ut3jwge_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rectangle-circle"} {...others} />);
}

export default Component;
