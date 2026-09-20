import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3v50cb1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h3v50cb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:structure-bold"} {...others} />);
}

export default Component;
