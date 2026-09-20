import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnxr3dbjd.css';
import '../../css/n/no6ore_5j.css';
import '../../css/q/qlk7i1b4e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bnxr3dbjd"/><path class="no6ore_5j"/><path class="qlk7i1b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-ansible-open"} {...others} />);
}

export default Component;
