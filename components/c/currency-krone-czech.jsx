import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf2llrb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rf2llrb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:currency-krone-czech"} {...others} />);
}

export default Component;
