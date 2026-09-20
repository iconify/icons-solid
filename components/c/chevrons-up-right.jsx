import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf5x2bw6c.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-5};
const content = `<path class="uf5x2bw6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevrons-up-right"} {...others} />);
}

export default Component;
