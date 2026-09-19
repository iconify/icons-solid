import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/ytep93bao.css';
import '../../css/j/j5_2do9_g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPoxM4bnA"><g class="ufeehvblu"><path class="ytep93bao"/><path class="j5_2do9_g"/></g></mask></defs><path mask="url(#SVGPoxM4bnA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:topic"} {...others} />);
}

export default Component;
