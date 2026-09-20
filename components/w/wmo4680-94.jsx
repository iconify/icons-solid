import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af-0lpb9m.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="af-0lpb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:wmo4680-94"} {...others} />);
}

export default Component;
