import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldqp-hbll.css';
import '../../css/g/ghz_-ebeo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ldqp-hbll"/><path class="ghz_-ebeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:package-question-mark-filled"} {...others} />);
}

export default Component;
