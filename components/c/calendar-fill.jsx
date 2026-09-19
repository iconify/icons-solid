import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ony59q43f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ony59q43f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:calendar-fill"} {...others} />);
}

export default Component;
