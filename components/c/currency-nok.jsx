import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5bf5chhf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5bf5chhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-nok"} {...others} />);
}

export default Component;
