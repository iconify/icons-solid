import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy0dji3-w.css';
import '../../css/o/o5dx87whx.css';
import '../../css/c/c5kg7bbtg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cy0dji3-w"/><path class="o5dx87whx"/><path class="c5kg7bbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-small-bold"} {...others} />);
}

export default Component;
