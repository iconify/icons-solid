import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is3xbuo4a.css';
import '../../css/a/a6vuirsuo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="is3xbuo4a"/><path class="a6vuirsuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:trash-x"} {...others} />);
}

export default Component;
