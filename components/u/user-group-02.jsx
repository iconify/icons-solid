import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/okbmw2brh.css';
import '../../css/c/c2pqo7bzq.css';
import '../../css/x/xm3lh5gcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="okbmw2brh"/><circle class="c2pqo7bzq"/><path class="xm3lh5gcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-group-02"} {...others} />);
}

export default Component;
