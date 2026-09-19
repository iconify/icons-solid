import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvqwwe6ij.css';
import '../../css/g/guc_2ccot.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bvqwwe6ij"/><path class="guc_2ccot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:aion"} {...others} />);
}

export default Component;
