import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o52kqiium.css';
import '../../css/k/kcinj1bqw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o52kqiium"/><path class="kcinj1bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oauth2-proxy-dark"} {...others} />);
}

export default Component;
