import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m2blynbna.css';
import '../../css/q/q51ei7bew.css';
import '../../css/l/lrrctebji.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnqgV7dAC"><g class="ufeehvblu"><path class="m2blynbna"/><path class="q51ei7bew"/><path class="lrrctebji"/></g></mask></defs><path mask="url(#SVGnqgV7dAC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:trend"} {...others} />);
}

export default Component;
