import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk2noib-m.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wk2noib-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:shaker-pint-glass"} {...others} />);
}

export default Component;
