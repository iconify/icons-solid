import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n90k4bjti.css';
import '../../css/f/fzhx4wbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n90k4bjti"/><circle class="fzhx4wbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:image-fill"} {...others} />);
}

export default Component;
