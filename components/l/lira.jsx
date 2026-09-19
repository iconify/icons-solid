import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcs7_bcpt.css';
import '../../css/o/oq0kdrbfu.css';
import '../../css/b/bivc0_8ea.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bcs7_bcpt"/><path class="oq0kdrbfu"/><path class="bivc0_8ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:lira"} {...others} />);
}

export default Component;
