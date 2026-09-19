import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzuuvqboe.css';
import '../../css/r/r_-3_ibwl.css';
import '../../css/f/fupu7vskw.css';
import '../../css/x/xkgzte5hj.css';
import '../../css/m/m1uf2obbn.css';
import '../../css/l/ltqpd9bmd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uzuuvqboe"/><path class="r_-3_ibwl"/><path class="fupu7vskw"/><path class="xkgzte5hj"/><path class="m1uf2obbn"/><path class="ltqpd9bmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ballot-box-with-ballot"} {...others} />);
}

export default Component;
