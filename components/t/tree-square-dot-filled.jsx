import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mouct7y2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mouct7y2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tree-square-dot-filled"} {...others} />);
}

export default Component;
