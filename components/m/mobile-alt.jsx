import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyn9tsk4r.css';

const viewBox = {"width":15,"height":24};
const content = `<path class="jyn9tsk4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:mobile-alt"} {...others} />);
}

export default Component;
