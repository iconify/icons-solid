import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzz5zzkqw.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/w/wsi5a16wd.css';
import '../../css/g/gus1k0b4h.css';
import '../../css/r/rb9bmbcgk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hzz5zzkqw"/><g class="sxsjrzbyv"><path class="wsi5a16wd"/><g clip-rule="evenodd"><path class="gus1k0b4h"/><path class="rb9bmbcgk"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dotnet"} {...others} />);
}

export default Component;
