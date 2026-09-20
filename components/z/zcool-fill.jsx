import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi-0scbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mi-0scbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:zcool-fill"} {...others} />);
}

export default Component;
