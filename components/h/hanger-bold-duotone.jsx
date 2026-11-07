import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0q8p-bqq.css';
import '../../css/n/n5-1bobdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x0q8p-bqq"/><path class="n5-1bobdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hanger-bold-duotone"} {...others} />);
}

export default Component;
