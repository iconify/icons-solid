import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb1vc-e3r.css';
import '../../css/x/xs322_bdu.css';
import '../../css/b/bm-jhkqqp.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="tb1vc-e3r"/><path class="xs322_bdu"/><path class="bm-jhkqqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:soccer"} {...others} />);
}

export default Component;
