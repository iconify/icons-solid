import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7z1elnzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z7z1elnzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:browser-solid"} {...others} />);
}

export default Component;
