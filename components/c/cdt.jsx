import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veuw6sb6b.css';
import '../../css/e/ekcp3cc9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="veuw6sb6b"/><path class="ekcp3cc9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cdt"} {...others} />);
}

export default Component;
