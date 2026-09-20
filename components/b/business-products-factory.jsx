import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_s9uacqw.css';
import '../../css/v/vvr88kt2y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a_s9uacqw"/><path class="vvr88kt2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-factory"} {...others} />);
}

export default Component;
