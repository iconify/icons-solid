import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5ogxjm1y.css';
import '../../css/b/b5ybc4bew.css';
import '../../css/p/p8bolj64l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5ogxjm1y"/><path class="b5ybc4bew"/><path class="p8bolj64l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-add-bold-duotone"} {...others} />);
}

export default Component;
