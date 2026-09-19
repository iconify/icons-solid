import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csk2dwbkh.css';

const viewBox = {"width":520,"height":512};
const content = `<path class="csk2dwbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:do-not-wring"} {...others} />);
}

export default Component;
