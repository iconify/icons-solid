import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vni83uqvy.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="vni83uqvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:flu-mask-remix"} {...others} />);
}

export default Component;
