import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od0ifz31h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="od0ifz31h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sort-down-fill"} {...others} />);
}

export default Component;
