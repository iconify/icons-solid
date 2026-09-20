import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g98dd5zxh.css';
import '../../css/e/evjd1k6-o.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="g98dd5zxh"/><path class="evjd1k6-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-ultrasound"} {...others} />);
}

export default Component;
