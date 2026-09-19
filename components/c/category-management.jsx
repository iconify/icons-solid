import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ev9z3v0zw.css';
import '../../css/t/t8r88gqxo.css';
import '../../css/l/l55_1objb.css';
import '../../css/q/qc4hljbyz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvGt6abvO"><g class="ft5dv1b6b"><rect class="ev9z3v0zw"/><path class="t8r88gqxo"/><circle class="l55_1objb"/><circle class="qc4hljbyz"/></g></mask></defs><path mask="url(#SVGvGt6abvO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:category-management"} {...others} />);
}

export default Component;
