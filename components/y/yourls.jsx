import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq-ci9buu.css';
import '../../css/y/yw1is44eo.css';
import '../../css/f/fafer672z.css';
import '../../css/e/ewxgxm6jn.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="uq-ci9buu"/><path class="yw1is44eo"/><path class="fafer672z"/><path clip-rule="evenodd" class="ewxgxm6jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yourls"} {...others} />);
}

export default Component;
