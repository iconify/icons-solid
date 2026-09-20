import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sktthrbsc.css';
import '../../css/c/cxl-8rb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sktthrbsc"/><path class="cxl-8rb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:contact-book-fill"} {...others} />);
}

export default Component;
