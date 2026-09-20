import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxd2nobky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxd2nobky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-chevron-left-sharp-fill"} {...others} />);
}

export default Component;
