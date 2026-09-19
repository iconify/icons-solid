import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/c/c7s3xmbhk.css';
import '../../css/f/f_jrzccdf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGABd0kF4X"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><path class="c7s3xmbhk"/><circle class="f_jrzccdf"/></g></mask></defs><path mask="url(#SVGABd0kF4X)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-music"} {...others} />);
}

export default Component;
