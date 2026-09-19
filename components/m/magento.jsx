import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpmse0ykx.css';
import '../../css/c/c77e_usuo.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="rpmse0ykx"/><path class="c77e_usuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:magento"} {...others} />);
}

export default Component;
