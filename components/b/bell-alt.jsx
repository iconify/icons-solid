import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml0qg9bax.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="ml0qg9bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:bell-alt"} {...others} />);
}

export default Component;
