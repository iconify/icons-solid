import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0u3hz8wh.css';

const viewBox = {"width":264,"height":488};
const content = `<path class="k0u3hz8wh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:goodreads"} {...others} />);
}

export default Component;
