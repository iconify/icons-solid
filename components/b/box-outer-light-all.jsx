import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as7zp-tqq.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="as7zp-tqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-all"} {...others} />);
}

export default Component;
