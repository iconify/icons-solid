import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svtc5q3tq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="svtc5q3tq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:table-columns-fill"} {...others} />);
}

export default Component;
