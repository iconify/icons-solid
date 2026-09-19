import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnzy3hbtk.css';
import '../../css/k/kyzmhfbwr.css';
import '../../css/u/uby945npi.css';
import '../../css/e/ethvzbbdu.css';
import '../../css/o/o90v17boa.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lnzy3hbtk"/><path class="kyzmhfbwr"/><path class="uby945npi"/><path class="ethvzbbdu"/><path class="o90v17boa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:googlecloud-wordmark"} {...others} />);
}

export default Component;
