import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r84m4t-aw.css';

const viewBox = {"width":352,"height":512};
const content = `<path class="r84m4t-aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:ticket"} {...others} />);
}

export default Component;
