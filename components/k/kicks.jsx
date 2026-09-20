import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hosod8b9n.css';
import '../../css/j/jjc2wxbhw.css';
import '../../css/v/v70_pwbed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hosod8b9n"/><path clip-rule="evenodd" class="jjc2wxbhw"/><path class="v70_pwbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kicks"} {...others} />);
}

export default Component;
