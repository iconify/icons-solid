import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exa2uu4rz.css';
import '../../css/u/ur3_zfbct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exa2uu4rz"/><path clip-rule="evenodd" class="ur3_zfbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-open-outline"} {...others} />);
}

export default Component;
