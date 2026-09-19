import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h909b4b3w.css';
import '../../css/f/fzhx4wbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h909b4b3w"/><circle class="fzhx4wbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:image-outline"} {...others} />);
}

export default Component;
