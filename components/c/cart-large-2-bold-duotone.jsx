import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgd48xvdj.css';
import '../../css/d/d5jogv23m.css';
import '../../css/s/sxqy4g73d.css';
import '../../css/o/o30f69bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qgd48xvdj"/><path class="d5jogv23m"/><path class="sxqy4g73d"/><path class="o30f69bwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-2-bold-duotone"} {...others} />);
}

export default Component;
