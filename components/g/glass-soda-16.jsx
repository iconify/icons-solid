import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz5smomfx.css';
import '../../css/p/p8s9m2bnu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="oz5smomfx"/><path class="p8s9m2bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:glass-soda-16"} {...others} />);
}

export default Component;
