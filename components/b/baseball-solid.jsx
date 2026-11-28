import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztr0zpbum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ztr0zpbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:baseball-solid"} {...others} />);
}

export default Component;
