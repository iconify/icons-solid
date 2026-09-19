import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlv8u-u-t.css';
import '../../css/a/aso8_oe6o.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="xlv8u-u-t"/><path class="aso8_oe6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:alert-filled"} {...others} />);
}

export default Component;
