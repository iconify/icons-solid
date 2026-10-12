import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-1ng1bws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-1ng1bws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-asterisk"} {...others} />);
}

export default Component;
