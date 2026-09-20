import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzsv4fboi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pzsv4fboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:equalizer-fill"} {...others} />);
}

export default Component;
