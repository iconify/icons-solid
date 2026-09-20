import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgs1axbkw.css';
import '../../css/f/f3yq4bbos.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pgs1axbkw"/><path class="f3yq4bbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:info"} {...others} />);
}

export default Component;
