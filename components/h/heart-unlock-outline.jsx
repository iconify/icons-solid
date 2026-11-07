import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebl2e7rnn.css';
import '../../css/o/oj866ibnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ebl2e7rnn"/><path clip-rule="evenodd" class="oj866ibnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-unlock-outline"} {...others} />);
}

export default Component;
