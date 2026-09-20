import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hax53gbsh.css';
import '../../css/h/hb4lzh0lj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hax53gbsh"/><path class="hb4lzh0lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:trophy-circle-fill"} {...others} />);
}

export default Component;
