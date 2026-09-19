import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elqse40db.css';
import '../../css/h/hkk3_ybhv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="elqse40db"/><path class="hkk3_ybhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rule-filled"} {...others} />);
}

export default Component;
