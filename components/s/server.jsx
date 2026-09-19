import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zffwe4bkl.css';
import '../../css/e/eiv7nvb5h.css';
import '../../css/x/xcoirhi_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zffwe4bkl"/><path class="eiv7nvb5h"/><path class="xcoirhi_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:server"} {...others} />);
}

export default Component;
