import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpsb4mp_x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bpsb4mp_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:yin-yang-on-square"} {...others} />);
}

export default Component;
