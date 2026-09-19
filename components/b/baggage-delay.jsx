import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/t8lnxgces.css';
import '../../css/l/lzfp1zk8l.css';
import '../../css/k/kfdh64trl.css';
import '../../css/d/dc83f5wdc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOkvPKdFD"><g class="rohhhzb0l"><path class="t8lnxgces"/><path class="lzfp1zk8l"/><path class="kfdh64trl"/><path class="dc83f5wdc"/></g></mask></defs><path mask="url(#SVGOkvPKdFD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:baggage-delay"} {...others} />);
}

export default Component;
