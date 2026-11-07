import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iliiaq87p.css';
import '../../css/a/adt82-boi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iliiaq87p"/><path clip-rule="evenodd" class="adt82-boi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:win-rar-outline"} {...others} />);
}

export default Component;
