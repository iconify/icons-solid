import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7q94gbwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7q94gbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:laurel-wreath"} {...others} />);
}

export default Component;
