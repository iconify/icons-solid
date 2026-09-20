import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpw-9zl2m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vpw-9zl2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:square-share"} {...others} />);
}

export default Component;
