import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bak9k5bed.css';
import '../../css/t/titlh42pv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bak9k5bed"/><path clip-rule="evenodd" class="titlh42pv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:explicit-outline"} {...others} />);
}

export default Component;
