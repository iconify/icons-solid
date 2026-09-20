import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjrs50btb.css';
import '../../css/c/cig9b4c-v.css';
import '../../css/z/zp7f7h2us.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mjrs50btb"/><path class="cig9b4c-v"/><path class="zp7f7h2us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-barber-light-sign"} {...others} />);
}

export default Component;
