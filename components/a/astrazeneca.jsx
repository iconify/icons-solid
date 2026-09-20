import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1uf_1b9n.css';

const viewBox = {"width":300,"height":43,"left":-0.835,"top":-0.509};
const content = `<path clip-rule="evenodd" class="f1uf_1b9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:astrazeneca"} {...others} />);
}

export default Component;
