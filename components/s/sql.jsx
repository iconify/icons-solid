import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2nh5t9ve.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v2nh5t9ve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:sql"} {...others} />);
}

export default Component;
