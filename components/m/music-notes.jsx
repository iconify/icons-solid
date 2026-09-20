import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziro4ceni.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ziro4ceni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:music-notes"} {...others} />);
}

export default Component;
