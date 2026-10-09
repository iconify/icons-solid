import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxsi2dbdr.css';
import '../../css/c/cx1o0f4by.css';
import '../../css/x/xr8sjdbkj.css';
import '../../css/c/cc307ksft.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cxsi2dbdr"/><path class="cx1o0f4by"/><path class="xr8sjdbkj"/><path class="cc307ksft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contactless-48"} {...others} />);
}

export default Component;
