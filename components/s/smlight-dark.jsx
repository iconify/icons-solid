import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0iipgbww.css';
import '../../css/h/hn4t-7ikp.css';
import '../../css/v/v72q7eb3k.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="x0iipgbww"/><circle class="hn4t-7ikp"/><circle class="v72q7eb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:smlight-dark"} {...others} />);
}

export default Component;
