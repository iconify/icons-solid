import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff8cuy0tf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ff8cuy0tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-align-offset-right-sharp-fill"} {...others} />);
}

export default Component;
