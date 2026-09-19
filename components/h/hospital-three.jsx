import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-piu6bto.css';
import '../../css/n/nlpt91dtk.css';
import '../../css/w/wpk5h2bgb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGekCfQbmp"><g class="ft5dv1b6b"><path class="l-piu6bto"/><path class="nlpt91dtk"/><path class="wpk5h2bgb"/></g></mask></defs><path mask="url(#SVGekCfQbmp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hospital-three"} {...others} />);
}

export default Component;
