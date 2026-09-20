import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x06o34gcw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x06o34gcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:fullscreen-exit-1"} {...others} />);
}

export default Component;
