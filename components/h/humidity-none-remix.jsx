import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5z_v5bfd.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="o5z_v5bfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:humidity-none-remix"} {...others} />);
}

export default Component;
