import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/l/l2val51bz.css';
import '../../css/e/e6mk55bwu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0En7VbxT"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><path class="l2val51bz"/><path class="e6mk55bwu"/></g></mask></defs><path mask="url(#SVG0En7VbxT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-withdrawal"} {...others} />);
}

export default Component;
