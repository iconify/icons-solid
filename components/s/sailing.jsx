import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/w/wyjql0_kb.css';
import '../../css/u/ua493xbdi.css';
import '../../css/s/s1q69fbxu.css';
import '../../css/d/djo_6or7z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkZ98JeQp"><g class="hv130ab-t"><path class="wyjql0_kb"/><path class="ua493xbdi"/><path class="s1q69fbxu"/><path class="djo_6or7z"/></g></mask></defs><path mask="url(#SVGkZ98JeQp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sailing"} {...others} />);
}

export default Component;
