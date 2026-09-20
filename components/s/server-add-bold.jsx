import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c37kw4biu.css';
import '../../css/n/nr6yb3djc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c37kw4biu"/><path class="nr6yb3djc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:server-add-bold"} {...others} />);
}

export default Component;
