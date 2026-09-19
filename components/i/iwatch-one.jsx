import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/l0nwgzbmv.css';
import '../../css/h/h28qv_bmn.css';
import '../../css/h/h4-u5ob3o.css';
import '../../css/u/usp_82bsi.css';
import '../../css/n/n3vlw9bfd.css';
import '../../css/r/rdkuekbvm.css';
import '../../css/d/ds1wewtfo.css';
import '../../css/z/zfspx11fx.css';
import '../../css/u/uqlwpr3ui.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDVDGEc0Q"><g class="s9cl3zbei"><rect class="l0nwgzbmv"/><path class="h28qv_bmn"/><path class="h4-u5ob3o"/><path class="usp_82bsi"/><path class="n3vlw9bfd"/><path class="rdkuekbvm"/><path class="ds1wewtfo"/><path class="zfspx11fx"/><path class="uqlwpr3ui"/></g></mask></defs><path mask="url(#SVGDVDGEc0Q)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:iwatch-one"} {...others} />);
}

export default Component;
