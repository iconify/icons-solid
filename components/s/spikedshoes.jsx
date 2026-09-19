import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsfne-b7l.css';
import '../../css/o/o1w6bqbbl.css';
import '../../css/k/kw24-ibsp.css';
import '../../css/k/kw37wvbai.css';
import '../../css/i/icv4h0htq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpSUqIc3L"><g class="nsfne-b7l"><path class="o1w6bqbbl"/><path class="kw24-ibsp"/><path class="kw37wvbai"/><path class="icv4h0htq"/></g></mask></defs><path mask="url(#SVGpSUqIc3L)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:spikedshoes"} {...others} />);
}

export default Component;
