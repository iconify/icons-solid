import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/n/nn9267b3z.css';
import '../../css/s/sv-ds5b4v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="nn9267b3z"/><path class="sv-ds5b4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:format"} {...others} />);
}

export default Component;
