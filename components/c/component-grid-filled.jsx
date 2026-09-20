import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b13zlmb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b13zlmb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:component-grid-filled"} {...others} />);
}

export default Component;
