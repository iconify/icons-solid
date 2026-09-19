import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edesw8bbn.css';
import '../../css/p/p7k_3ybxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edesw8bbn"/><path class="p7k_3ybxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-right-stroke-circle-half-filled"} {...others} />);
}

export default Component;
