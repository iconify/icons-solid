import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r-d5io9bn.css';
import '../../css/g/gg1lczq6x.css';
import '../../css/h/h5kmtlbhf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="r-d5io9bn"/><path class="gg1lczq6x"/><path class="h5kmtlbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:umbrella"} {...others} />);
}

export default Component;
