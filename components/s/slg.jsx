import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er8a8eblt.css';
import '../../css/c/c_exiz4cf.css';
import '../../css/d/dg3xy7bww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="er8a8eblt"/><path clip-rule="evenodd" class="c_exiz4cf"/><path class="dg3xy7bww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:slg"} {...others} />);
}

export default Component;
