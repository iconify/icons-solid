import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id-f7f-_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="id-f7f-_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:star"} {...others} />);
}

export default Component;
