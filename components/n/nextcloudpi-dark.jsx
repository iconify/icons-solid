import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2crgeb7t.css';
import '../../css/q/qwqwk1bts.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="w2crgeb7t"/><path clip-rule="evenodd" class="qwqwk1bts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloudpi-dark"} {...others} />);
}

export default Component;
