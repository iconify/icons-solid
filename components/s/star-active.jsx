import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym-4rinff.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ym-4rinff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:star-active"} {...others} />);
}

export default Component;
