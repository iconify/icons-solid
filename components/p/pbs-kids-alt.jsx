import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr8zurb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pr8zurb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:pbs-kids-alt"} {...others} />);
}

export default Component;
