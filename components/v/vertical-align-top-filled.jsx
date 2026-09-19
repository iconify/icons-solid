import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eghrhdq2l.css';
import '../../css/q/qlwbujp-h.css';
import '../../css/n/nitjh-b5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eghrhdq2l"/><rect class="qlwbujp-h"/><rect class="nitjh-b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:vertical-align-top-filled"} {...others} />);
}

export default Component;
