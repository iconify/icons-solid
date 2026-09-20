import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8h8i1yra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8h8i1yra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:hotel-fill"} {...others} />);
}

export default Component;
