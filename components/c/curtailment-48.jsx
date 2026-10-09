import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-py7pbjn.css';
import '../../css/d/d59gayyww.css';
import '../../css/m/m0ym9zbob.css';
import '../../css/c/c_xh25dlx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u-py7pbjn"/><path class="d59gayyww"/><path class="m0ym9zbob"/><path class="c_xh25dlx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:curtailment-48"} {...others} />);
}

export default Component;
