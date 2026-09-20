import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg171ebhl.css';
import '../../css/z/z6ju0jldq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hg171ebhl"/><path class="z6ju0jldq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-postman"} {...others} />);
}

export default Component;
