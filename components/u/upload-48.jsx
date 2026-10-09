import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upy-ybcph.css';
import '../../css/i/iw2o35bsv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="upy-ybcph"/><path class="iw2o35bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:upload-48"} {...others} />);
}

export default Component;
