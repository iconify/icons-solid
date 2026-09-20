import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/macbvkc0p.css';

const viewBox = {"width":24,"height":24,"left":-8,"top":-5};
const content = `<path class="macbvkc0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevron-left"} {...others} />);
}

export default Component;
