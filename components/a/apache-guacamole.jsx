import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtunhlwyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qtunhlwyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:apache-guacamole"} {...others} />);
}

export default Component;
