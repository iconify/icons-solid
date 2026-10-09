import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tupyodbki.css';
import '../../css/k/k19v9_bwo.css';
import '../../css/c/cizg-mbqj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tupyodbki"/><path class="k19v9_bwo"/><path class="cizg-mbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-pump-48"} {...others} />);
}

export default Component;
