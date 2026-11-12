import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvx5x4s9r.css';
import '../../css/r/rk5uadcey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zvx5x4s9r"/><path class="rk5uadcey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-dollar"} {...others} />);
}

export default Component;
