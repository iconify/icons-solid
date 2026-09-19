import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9-ohxbke.css';
import '../../css/e/ehyq6ihjz.css';
import '../../css/t/t3va_bxxh.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="x9-ohxbke"/><circle class="ehyq6ihjz"/><path class="t3va_bxxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:cart-sharp"} {...others} />);
}

export default Component;
