import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/q/qnxfzvb7c.css';
import '../../css/i/im6tudb5i.css';
import '../../css/t/to_l31w7x.css';
import '../../css/z/z5_m0h1pb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="qnxfzvb7c"/><path class="im6tudb5i"/><path class="to_l31w7x"/><path class="z5_m0h1pb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-target"} {...others} />);
}

export default Component;
