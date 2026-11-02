import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe9k1ybro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oe9k1ybro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:banknote-x-fill"} {...others} />);
}

export default Component;
