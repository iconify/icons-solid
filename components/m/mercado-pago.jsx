import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjgcf6wck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zjgcf6wck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:mercado-pago"} {...others} />);
}

export default Component;
