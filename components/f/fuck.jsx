import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px4ty5bem.css';

const viewBox = {"width":304,"height":472};
const content = `<path class="px4ty5bem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:fuck"} {...others} />);
}

export default Component;
