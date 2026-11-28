import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m60pqtldl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h0a8jr8wu.css';
import '../../css/q/q96y81bii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m60pqtldl secondary"/><g class="dt0cm9dhy primary"><path class="h0a8jr8wu"/><path class="q96y81bii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:puzzle-check-duo"} {...others} />);
}

export default Component;
