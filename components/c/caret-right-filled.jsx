import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py3-xbc6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="py3-xbc6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:caret-right-filled"} {...others} />);
}

export default Component;
