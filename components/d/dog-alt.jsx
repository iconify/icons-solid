import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-i1pqbhz.css';
import '../../css/e/ecv-qkvdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-i1pqbhz"/><path class="ecv-qkvdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dog-alt"} {...others} />);
}

export default Component;
