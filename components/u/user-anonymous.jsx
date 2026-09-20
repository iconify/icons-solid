import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1hwcrbsr.css';
import '../../css/r/rdjvdkbbm.css';
import '../../css/e/e1fsegbwk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c1hwcrbsr"/><circle class="rdjvdkbbm"/><circle class="e1fsegbwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-anonymous"} {...others} />);
}

export default Component;
