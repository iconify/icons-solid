import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb5pi-bnv.css';
import '../../css/c/c3tt83vyg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tb5pi-bnv"/><path class="c3tt83vyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-dist"} {...others} />);
}

export default Component;
