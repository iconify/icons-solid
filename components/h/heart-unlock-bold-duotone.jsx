import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebl2e7rnn.css';
import '../../css/a/ae3wunbcx.css';
import '../../css/e/e67gh4ytw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ebl2e7rnn"/><path class="ae3wunbcx"/><path clip-rule="evenodd" class="e67gh4ytw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-unlock-bold-duotone"} {...others} />);
}

export default Component;
