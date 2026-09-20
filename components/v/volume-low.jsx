import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9ms0wllv.css';
import '../../css/d/dd6fl6u9c.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="z9ms0wllv"/><path class="dd6fl6u9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:volume-low"} {...others} />);
}

export default Component;
