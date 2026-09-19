import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca5ecz53l.css';
import '../../css/o/otqe89buz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ca5ecz53l"/><path class="otqe89buz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:storage-pool"} {...others} />);
}

export default Component;
