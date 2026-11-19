import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkq8fl0ry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkq8fl0ry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:plus-equal"} {...others} />);
}

export default Component;
