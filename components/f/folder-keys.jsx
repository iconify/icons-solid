import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l47nr7bbh.css';
import '../../css/i/iywcnqb5a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l47nr7bbh"/><path class="iywcnqb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-keys"} {...others} />);
}

export default Component;
