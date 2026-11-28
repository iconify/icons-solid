import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/akqy0tg5u.css';
import '../../css/v/vcm53pb7r.css';
import '../../css/c/cvyjl4bpd.css';
import '../../css/q/qnmufby7n.css';
import '../../css/j/jqz7rpb0q.css';
import '../../css/d/dlobu9b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="akqy0tg5u"/><path class="vcm53pb7r"/><path class="cvyjl4bpd"/><path class="qnmufby7n"/><path class="jqz7rpb0q"/><path class="dlobu9b6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cat"} {...others} />);
}

export default Component;
