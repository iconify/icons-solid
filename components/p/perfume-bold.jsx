import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdsnyjdfe.css';
import '../../css/b/b_2rxbb6i.css';
import '../../css/k/k1hcvjbci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdsnyjdfe"/><path class="b_2rxbb6i"/><path class="k1hcvjbci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:perfume-bold"} {...others} />);
}

export default Component;
