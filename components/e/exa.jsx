import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au8fi6b2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="au8fi6b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:exa"} {...others} />);
}

export default Component;
