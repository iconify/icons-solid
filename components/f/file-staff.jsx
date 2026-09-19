import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/m/mm4ny9-1p.css';
import '../../css/v/v0rfqyzpp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgA8a3bBK"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><circle class="mm4ny9-1p"/><path class="v0rfqyzpp"/></g></mask></defs><path mask="url(#SVGgA8a3bBK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-staff"} {...others} />);
}

export default Component;
