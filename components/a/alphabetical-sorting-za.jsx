import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw_7llbhm.css';
import '../../css/e/egp4naccw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zw_7llbhm"/><path class="egp4naccw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:alphabetical-sorting-za"} {...others} />);
}

export default Component;
