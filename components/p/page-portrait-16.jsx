import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5fc605jj.css';
import '../../css/v/vrumybbkb.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="s5fc605jj"/><path clip-rule="evenodd" class="vrumybbkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:page-portrait-16"} {...others} />);
}

export default Component;
