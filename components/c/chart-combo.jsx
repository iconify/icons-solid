import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmaz-9vif.css';
import '../../css/x/xtkqegbkm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mmaz-9vif"/><path class="xtkqegbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-combo"} {...others} />);
}

export default Component;
