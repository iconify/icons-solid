import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7dhix50g.css';
import '../../css/u/ulrla2b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g7dhix50g"/><path class="ulrla2b2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:roller-skating"} {...others} />);
}

export default Component;
