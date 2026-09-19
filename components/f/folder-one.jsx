import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tb1eyofjb.css';
import '../../css/e/ec-ycqrem.css';
import '../../css/h/hg12s7sst.css';
import '../../css/c/cq502cbyx.css';
import '../../css/m/mrh9r8bpr.css';
import '../../css/z/zith5ibjo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnnhfpbRT"><g class="ft5dv1b6b"><path class="tb1eyofjb"/><circle class="ec-ycqrem"/><path class="hg12s7sst"/><path class="cq502cbyx"/><circle class="mrh9r8bpr"/><path class="zith5ibjo"/></g></mask></defs><path mask="url(#SVGnnhfpbRT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-one"} {...others} />);
}

export default Component;
