import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arac17bjm.css';
import '../../css/b/bjy6rwbot.css';
import '../../css/r/rc8gboi9c.css';
import '../../css/m/mfqg_7hka.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="arac17bjm"/><path class="bjy6rwbot"/><path class="rc8gboi9c"/><path class="mfqg_7hka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:iceberg"} {...others} />);
}

export default Component;
