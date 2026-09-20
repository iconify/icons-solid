import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atu2sub5i.css';
import '../../css/f/fwkrdacaj.css';
import '../../css/u/ujhpcdopf.css';
import '../../css/s/sf7c3hbxk.css';
import '../../css/d/dvjvyb1np.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="atu2sub5i"/><path class="fwkrdacaj"/><path class="ujhpcdopf"/><path class="sf7c3hbxk"/><path class="dvjvyb1np"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:automatic1111-light"} {...others} />);
}

export default Component;
