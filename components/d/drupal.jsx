import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbbhu27xv.css';
import '../../css/x/xhhedbbop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fbbhu27xv"/><path class="xhhedbbop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:drupal"} {...others} />);
}

export default Component;
