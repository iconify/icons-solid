import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-zxnv8lg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-zxnv8lg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:wifi-alert"} {...others} />);
}

export default Component;
