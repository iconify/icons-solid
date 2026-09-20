import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz4tj5bfd.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="bz4tj5bfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chef-toque-hat-remix"} {...others} />);
}

export default Component;
