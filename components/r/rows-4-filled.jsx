import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogjzoabvq.css';
import '../../css/p/pwaiynbmo.css';
import '../../css/c/cis-y5biu.css';
import '../../css/k/kt64ghrqf.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="ogjzoabvq"/><rect class="pwaiynbmo"/><rect class="cis-y5biu"/><rect class="kt64ghrqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rows-4-filled"} {...others} />);
}

export default Component;
