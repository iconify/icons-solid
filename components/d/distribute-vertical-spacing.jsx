import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/t/taetgzrim.css';
import '../../css/i/i2innpbyc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGw2JMGVNV"><g class="hv130ab-t"><path class="taetgzrim"/><path class="i2innpbyc"/></g></mask></defs><path mask="url(#SVGw2JMGVNV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:distribute-vertical-spacing"} {...others} />);
}

export default Component;
