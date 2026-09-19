import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8za_lbmz.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="n8za_lbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:sina-weibo"} {...others} />);
}

export default Component;
