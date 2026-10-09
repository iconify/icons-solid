import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_gzed_lp.css';
import '../../css/s/sed9x-mdd.css';
import '../../css/c/cjftz1f6d.css';
import '../../css/a/aiqt_ub4f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m_gzed_lp"/><path class="sed9x-mdd"/><path class="cjftz1f6d"/><path class="aiqt_ub4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:anchor-48-bold"} {...others} />);
}

export default Component;
