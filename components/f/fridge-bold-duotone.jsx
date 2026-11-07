import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjk5al0qp.css';
import '../../css/u/u3fekhbnn.css';
import '../../css/h/hvm7gjbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vjk5al0qp"/><path class="u3fekhbnn"/><path class="hvm7gjbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fridge-bold-duotone"} {...others} />);
}

export default Component;
