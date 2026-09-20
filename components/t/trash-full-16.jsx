import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2o_znbdb.css';
import '../../css/v/vh7rfhbtx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c2o_znbdb"/><path clip-rule="evenodd" class="vh7rfhbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:trash-full-16"} {...others} />);
}

export default Component;
