import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh_jiebln.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="xh_jiebln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:commenting"} {...others} />);
}

export default Component;
