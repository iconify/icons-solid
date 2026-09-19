import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/n/nwcml8bvw.css';
import '../../css/q/qya8d8bbv.css';
import '../../css/c/cms8k8b5p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="nwcml8bvw"/><path class="qya8d8bbv"/><path class="cms8k8b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pig-zodiac"} {...others} />);
}

export default Component;
