import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh-18tbsw.css';
import '../../css/f/ftv6d47py.css';
import '../../css/l/l-ba9qber.css';
import '../../css/d/dertp7bua.css';
import '../../css/r/r-r5xdlfr.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="jh-18tbsw"/><path class="ftv6d47py"/><circle class="l-ba9qber"/><circle class="dertp7bua"/><path class="r-r5xdlfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:network-4-reference"} {...others} />);
}

export default Component;
