import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_35_czod.css';
import '../../css/e/efsylsb0d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c_35_czod"/><path class="efsylsb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chevron-down-outline"} {...others} />);
}

export default Component;
