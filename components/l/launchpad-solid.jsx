import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1_kc2bft.css';
import '../../css/q/qxu9d8l6m.css';
import '../../css/t/thy0iw71r.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="n1_kc2bft"/><path class="qxu9d8l6m"/><path class="thy0iw71r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:launchpad-solid"} {...others} />);
}

export default Component;
