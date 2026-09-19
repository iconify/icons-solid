import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp5ots5-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gp5ots5-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:align-bottom"} {...others} />);
}

export default Component;
