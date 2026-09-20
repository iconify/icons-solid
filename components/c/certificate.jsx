import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8e8rbc6x.css';
import '../../css/n/nqrz7szok.css';
import '../../css/j/j6md0tpiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j8e8rbc6x"/><path class="nqrz7szok"/><path class="j6md0tpiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:certificate"} {...others} />);
}

export default Component;
