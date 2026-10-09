import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o976p-bam.css';
import '../../css/s/scecasm2h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o976p-bam"/><path class="scecasm2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:note-20"} {...others} />);
}

export default Component;
