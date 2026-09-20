import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovhjtnbtq.css';
import '../../css/v/vm3bmsb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ovhjtnbtq"/><path class="vm3bmsb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:american-express-logo-solid"} {...others} />);
}

export default Component;
