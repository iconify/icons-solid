import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tss4wsc6m.css';
import '../../css/b/b391cab7r.css';
import '../../css/y/y4p9qrbfa.css';
import '../../css/i/inkr7bb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tss4wsc6m"/><path class="b391cab7r"/><path class="y4p9qrbfa"/><path class="inkr7bb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:safety-911"} {...others} />);
}

export default Component;
