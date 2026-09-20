import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl0eqtezu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vl0eqtezu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sunset"} {...others} />);
}

export default Component;
