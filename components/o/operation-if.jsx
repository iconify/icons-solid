import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w14fwxg9c.css';
import '../../css/p/p9upddc0f.css';
import '../../css/o/o7tfrmnak.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w14fwxg9c"/><path class="p9upddc0f"/><path class="o7tfrmnak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:operation-if"} {...others} />);
}

export default Component;
