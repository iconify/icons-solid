import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/u/um11cq07f.css';
import '../../css/p/p8k1y1bnk.css';
import '../../css/e/eut93dbir.css';
import '../../css/s/sshyzbc1t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgXWJZddG"><g class="hv130ab-t"><path class="um11cq07f"/><circle class="p8k1y1bnk"/><circle class="eut93dbir"/><circle class="sshyzbc1t"/></g></mask></defs><path mask="url(#SVGgXWJZddG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:family"} {...others} />);
}

export default Component;
