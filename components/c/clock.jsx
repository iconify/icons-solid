import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud2t_6b-y.css';
import '../../css/h/hxggj4dhe.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ud2t_6b-y"/><path class="hxggj4dhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:clock"} {...others} />);
}

export default Component;
