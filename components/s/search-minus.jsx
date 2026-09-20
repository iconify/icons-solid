import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olznt6bba.css';
import '../../css/a/augpk_bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="olznt6bba"/><path class="augpk_bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:search-minus"} {...others} />);
}

export default Component;
