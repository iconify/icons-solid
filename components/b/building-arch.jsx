import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x4vni6b4t.css';
import '../../css/e/eym2-shya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x4vni6b4t"/><path class="eym2-shya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-arch"} {...others} />);
}

export default Component;
