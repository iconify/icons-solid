import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okpx9ccms.css';
import '../../css/a/a59ct2b9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okpx9ccms"/><path class="a59ct2b9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:download-bottom-bold"} {...others} />);
}

export default Component;
