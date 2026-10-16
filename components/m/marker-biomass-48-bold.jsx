import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/y/ytmexvb4a.css';
import '../../css/w/wi_73xbfb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="ytmexvb4a"/><path class="wi_73xbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-biomass-48-bold"} {...others} />);
}

export default Component;
