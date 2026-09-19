import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhpyq2aym.css';
import '../../css/n/n005qxbmk.css';
import '../../css/f/fqdenqbaq.css';
import '../../css/w/wvaytaojv.css';
import '../../css/j/jag4kdbff.css';
import '../../css/q/qv7b_0bre.css';
import '../../css/d/dsrvnzqwf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yhpyq2aym"/><path class="n005qxbmk"/><path class="fqdenqbaq"/><path class="wvaytaojv"/><path class="jag4kdbff"/><path class="qv7b_0bre"/><path class="dsrvnzqwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:smallfrown"} {...others} />);
}

export default Component;
