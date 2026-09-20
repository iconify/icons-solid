import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5fxn4-5j.css';
import '../../css/x/xtz1kbe1h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i5fxn4-5j"/><path class="xtz1kbe1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-project"} {...others} />);
}

export default Component;
