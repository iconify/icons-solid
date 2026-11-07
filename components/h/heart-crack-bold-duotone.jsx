import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-abn8bob.css';
import '../../css/x/xxbq7uh3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-abn8bob"/><path class="xxbq7uh3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-crack-bold-duotone"} {...others} />);
}

export default Component;
