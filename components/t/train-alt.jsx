import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihh-fxb0c.css';
import '../../css/x/xt343bbpc.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ihh-fxb0c"/><path class="xt343bbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:train-alt"} {...others} />);
}

export default Component;
