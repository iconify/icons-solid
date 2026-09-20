import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/k/kgsk8t.css';
import '../../css/s/sjppje.css';
import '../../css/i/i--0rr.css';
import '../../css/s/so-from-66.css';
import '../../css/s/sw-cnj-zb.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c kgsk8t"/><path class="a0m25c sjppje"/><path class="a0m25c i--0rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:alert-square-loop"} {...others} />);
}

export default Component;
