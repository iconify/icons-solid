import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1ch7ybkg.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/i/i7jv4xbcs.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="f1ch7ybkg"/><circle class="tqb_6nb6c"/><circle class="i7jv4xbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:more-one"} {...others} />);
}

export default Component;
