import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkeq-6-ot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkeq-6-ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:train-clock"} {...others} />);
}

export default Component;
