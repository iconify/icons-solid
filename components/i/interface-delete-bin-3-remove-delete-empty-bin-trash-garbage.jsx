import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n30oucg3z.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="n30oucg3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-delete-bin-3-remove-delete-empty-bin-trash-garbage"} {...others} />);
}

export default Component;
