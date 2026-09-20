import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx4asvbkn.css';
import '../../css/x/x9kjoyb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zx4asvbkn"/><path class="x9kjoyb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:quora"} {...others} />);
}

export default Component;
