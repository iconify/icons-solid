import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y08kdrb1f.css';
import '../../css/w/w9izy0vjp.css';
import '../../css/m/mk4433d7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y08kdrb1f"/><path clip-rule="evenodd" class="w9izy0vjp"/><path class="mk4433d7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:alarm-solid"} {...others} />);
}

export default Component;
