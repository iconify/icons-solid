import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh0y2gb1s.css';
import '../../css/e/ebu-_wb0p.css';
import '../../css/q/qz5bn7pgu.css';
import '../../css/b/bupp6s2bh.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="lh0y2gb1s"/><circle class="ebu-_wb0p"/><circle class="qz5bn7pgu"/><path class="bupp6s2bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:head-side-cough"} {...others} />);
}

export default Component;
