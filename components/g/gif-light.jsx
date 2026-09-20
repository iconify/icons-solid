import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi9pucb8a.css';
import '../../css/y/y008p5b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fi9pucb8a"/><path clip-rule="evenodd" class="y008p5b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:gif-light"} {...others} />);
}

export default Component;
