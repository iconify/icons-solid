import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usi-x5bch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="usi-x5bch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:spam-3-fill"} {...others} />);
}

export default Component;
