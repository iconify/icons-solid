import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e67gh4ytw.css';
import '../../css/e/ebl2e7rnn.css';
import '../../css/h/hlzr7r44e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e67gh4ytw"/><path class="ebl2e7rnn"/><path class="hlzr7r44e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-lock-bold-duotone"} {...others} />);
}

export default Component;
