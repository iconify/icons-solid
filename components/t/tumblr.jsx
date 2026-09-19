import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whft5_bou.css';

const viewBox = {"width":14,"height":24};
const content = `<path class="whft5_bou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:tumblr"} {...others} />);
}

export default Component;
