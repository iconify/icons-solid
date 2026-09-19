import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/s/sn94s9byb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZnuNUb7M"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="sn94s9byb"/></g></mask></defs><path mask="url(#SVGZnuNUb7M)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:alignment-horizontal-bottom"} {...others} />);
}

export default Component;
