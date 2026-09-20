import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os3qt5bjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="os3qt5bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-arrow-left-outline"} {...others} />);
}

export default Component;
