import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_uptrb-m.css';
import '../../css/v/vuogqwbrj.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="a_uptrb-m clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 vuogqwbrj"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:vm-solid"} {...others} />);
}

export default Component;
