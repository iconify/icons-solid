import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/k/kkjswnaob.css';
import '../../css/u/uq05w02ci.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpLdqtcWN"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><circle class="kkjswnaob"/><path class="uq05w02ci"/></g></mask></defs><path mask="url(#SVGpLdqtcWN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:image-files"} {...others} />);
}

export default Component;
