import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2yxnrbti.css';
import '../../css/l/lcxfshbjz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m2yxnrbti"/><path class="lcxfshbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tariff-20"} {...others} />);
}

export default Component;
