import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsvramvwf.css';
import '../../css/u/ui153smtr.css';
import '../../css/s/su2qj0crx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jsvramvwf"/><path class="ui153smtr"/><path class="su2qj0crx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-crack-1"} {...others} />);
}

export default Component;
