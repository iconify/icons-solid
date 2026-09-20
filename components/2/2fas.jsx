import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/net5hhbra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="net5hhbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:2fas"} {...others} />);
}

export default Component;
