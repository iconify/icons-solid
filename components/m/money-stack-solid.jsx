import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gblqb-qvt.css';
import '../../css/x/xaa7x4xbn.css';
import '../../css/x/x9866xb-a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gblqb-qvt"/><path clip-rule="evenodd" class="xaa7x4xbn"/><path class="x9866xb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:money-stack-solid"} {...others} />);
}

export default Component;
