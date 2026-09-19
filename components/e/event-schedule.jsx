import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-kkh0h8n.css';
import '../../css/k/kj5p4ecrw.css';
import '../../css/n/n_757dk6o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s-kkh0h8n"/><path class="kj5p4ecrw"/><path class="n_757dk6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:event-schedule"} {...others} />);
}

export default Component;
