import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bywdou5mv.css';
import '../../css/g/gqo6vsblf.css';
import '../../css/n/n4bbqnbhj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bywdou5mv"/><path class="gqo6vsblf"/><path class="n4bbqnbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hammer-and-pick"} {...others} />);
}

export default Component;
