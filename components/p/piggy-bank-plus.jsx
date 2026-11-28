import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m733kd0tf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m733kd0tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:piggy-bank-plus"} {...others} />);
}

export default Component;
