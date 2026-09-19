import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb9vtb3ni.css';
import '../../css/s/s9lfmybtd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sb9vtb3ni"/><path class="s9lfmybtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:checkbox-square"} {...others} />);
}

export default Component;
