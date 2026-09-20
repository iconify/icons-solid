import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok8jdmbmr.css';
import '../../css/p/pgpjlbcjk.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ok8jdmbmr"/><path class="pgpjlbcjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:inpatient"} {...others} />);
}

export default Component;
