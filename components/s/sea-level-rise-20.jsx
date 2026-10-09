import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t15864jur.css';
import '../../css/a/apln4p07a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t15864jur"/><path class="apln4p07a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sea-level-rise-20"} {...others} />);
}

export default Component;
