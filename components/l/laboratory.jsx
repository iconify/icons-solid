import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k19k3sbft.css';
import '../../css/v/v2uff_sgc.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="k19k3sbft"/><path class="v2uff_sgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:laboratory"} {...others} />);
}

export default Component;
