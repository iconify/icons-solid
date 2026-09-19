import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tvgauyb5v.css';
import '../../css/b/b77-k2blg.css';
import '../../css/q/qczrjccey.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzfmErcyW"><g class="s9cl3zbei"><path class="tvgauyb5v"/><path class="b77-k2blg"/><path class="qczrjccey"/></g></mask></defs><path mask="url(#SVGzfmErcyW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:movie"} {...others} />);
}

export default Component;
