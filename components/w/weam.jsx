import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bogfzjklk.css';
import '../../css/r/rv75bablh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bogfzjklk"/><path class="rv75bablh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:weam"} {...others} />);
}

export default Component;
