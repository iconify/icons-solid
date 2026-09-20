import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uitkfv-im.css';
import '../../css/n/n5mt1qbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uitkfv-im"/><path class="n5mt1qbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:book-open-alt-fill"} {...others} />);
}

export default Component;
