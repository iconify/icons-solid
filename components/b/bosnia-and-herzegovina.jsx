import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smj7c3byz.css';
import '../../css/i/ir3eif-7d.css';
import '../../css/v/vj4ug-bwr.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="smj7c3byz"/><path class="ir3eif-7d"/><path class="vj4ug-bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:bosnia-and-herzegovina"} {...others} />);
}

export default Component;
