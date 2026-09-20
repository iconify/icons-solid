import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n1y07nbor.css';
import '../../css/g/gf8gg47ae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n1y07nbor"/><path class="gf8gg47ae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-minus"} {...others} />);
}

export default Component;
