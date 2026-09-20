import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwzj-8bcw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uwzj-8bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:exclamation-triangle"} {...others} />);
}

export default Component;
