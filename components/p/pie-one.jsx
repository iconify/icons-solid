import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/y/yt_bpvbwh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJkOv9bDG"><g class="aql7dnt-u"><circle class="kb9zbkb1z"/><path class="yt_bpvbwh"/></g></mask></defs><path mask="url(#SVGJkOv9bDG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pie-one"} {...others} />);
}

export default Component;
