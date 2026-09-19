import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddphdubhq.css';
import '../../css/v/v_8_2yi8g.css';
import '../../css/b/b93e90bye.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ddphdubhq"/><path class="v_8_2yi8g"/><path class="b93e90bye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:drill-back"} {...others} />);
}

export default Component;
