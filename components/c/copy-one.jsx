import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/d/dj6gm4qjv.css';
import '../../css/p/pw2s73b4a.css';
import '../../css/s/swjdnjbbn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="dj6gm4qjv"/><path class="pw2s73b4a"/><path class="swjdnjbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:copy-one"} {...others} />);
}

export default Component;
