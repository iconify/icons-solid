import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/scy0lvbai.css';
import '../../css/c/cf-shj1li.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="scy0lvbai"/><path class="cf-shj1li"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:irregular-polyhedron-plus"} {...others} />);
}

export default Component;
