import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyi0tcctg.css';
import '../../css/b/bz41hmbmv.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="fyi0tcctg"/><path class="bz41hmbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-drinking-fountain"} {...others} />);
}

export default Component;
