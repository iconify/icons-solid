import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_nhc2bkw.css';
import '../../css/w/wnghrmbmj.css';
import '../../css/c/cp7tt2bmi.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="k_nhc2bkw"/><path class="wnghrmbmj"/><path class="cp7tt2bmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:belgium"} {...others} />);
}

export default Component;
