import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3alk_bkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3alk_bkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:suitcase-check"} {...others} />);
}

export default Component;
