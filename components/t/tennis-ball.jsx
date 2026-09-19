import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avomhzplk.css';
import '../../css/x/xrwqa-u3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="avomhzplk"/><path class="xrwqa-u3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:tennis-ball"} {...others} />);
}

export default Component;
