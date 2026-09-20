import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0kaybcym.css';
import '../../css/l/l1wpyo1fg.css';
import '../../css/c/ciy1dsjbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0kaybcym"/><circle class="l1wpyo1fg"/><path class="ciy1dsjbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:business-card"} {...others} />);
}

export default Component;
