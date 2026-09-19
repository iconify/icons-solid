import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbc8p3xmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qbc8p3xmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:phone-horizontal"} {...others} />);
}

export default Component;
