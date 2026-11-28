import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifj42nz6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifj42nz6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ampersand-duo"} {...others} />);
}

export default Component;
