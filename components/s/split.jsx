import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha1ngc8fk.css';
import '../../css/v/vrz9w3bax.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ha1ngc8fk"/><path class="vrz9w3bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:split"} {...others} />);
}

export default Component;
