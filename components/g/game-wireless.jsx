import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6gqzxb4d.css';
import '../../css/e/e8oivg3hw.css';
import '../../css/v/vmbns7bhy.css';
import '../../css/j/jplfpxb-u.css';
import '../../css/i/iqo6p--2e.css';
import '../../css/y/y6xdyyo0r.css';
import '../../css/d/dr6wymz9r.css';
import '../../css/q/qvotekphz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x6gqzxb4d"/><path class="e8oivg3hw"/><circle class="vmbns7bhy"/><circle class="jplfpxb-u"/><circle class="iqo6p--2e"/><circle class="y6xdyyo0r"/><path class="dr6wymz9r"/><path class="qvotekphz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:game-wireless"} {...others} />);
}

export default Component;
