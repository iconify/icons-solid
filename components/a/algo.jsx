import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufs0pr4sd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ufs0pr4sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:algo"} {...others} />);
}

export default Component;
