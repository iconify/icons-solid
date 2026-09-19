import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1we_sbru.css';
import '../../css/w/wo3zs2b-t.css';
import '../../css/j/j06su1bbr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a1we_sbru"/><path class="wo3zs2b-t"/><path class="j06su1bbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:folder"} {...others} />);
}

export default Component;
