import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5nkmtagj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="d5nkmtagj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shipment-add-remix"} {...others} />);
}

export default Component;
