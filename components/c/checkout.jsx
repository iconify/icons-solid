import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkg-e7bno.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="vkg-e7bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:checkout"} {...others} />);
}

export default Component;
