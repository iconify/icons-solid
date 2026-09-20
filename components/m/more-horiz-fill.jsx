import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1_f-bgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bc1_f-bgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:more-horiz-fill"} {...others} />);
}

export default Component;
