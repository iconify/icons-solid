import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8pgu-b0i.css';
import '../../css/f/fy6rj9gqt.css';
import '../../css/h/hsqbyacrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j8pgu-b0i"/><path class="fy6rj9gqt"/><path clip-rule="evenodd" class="hsqbyacrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:vacuum-duotone"} {...others} />);
}

export default Component;
