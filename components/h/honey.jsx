import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wn9wscqte.css';
import '../../css/g/gyvowbb7z.css';
import '../../css/w/wa76u7bdt.css';
import '../../css/j/jl-543bif.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNwqRQLMQ"><g class="rohhhzb0l"><path class="wn9wscqte"/><path class="gyvowbb7z"/><path class="wa76u7bdt"/><path class="jl-543bif"/></g></mask></defs><path mask="url(#SVGNwqRQLMQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:honey"} {...others} />);
}

export default Component;
