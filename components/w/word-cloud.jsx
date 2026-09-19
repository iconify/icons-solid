import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxvm15b7r.css';
import '../../css/j/jq2vx7i2s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xxvm15b7r"/><path class="jq2vx7i2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:word-cloud"} {...others} />);
}

export default Component;
