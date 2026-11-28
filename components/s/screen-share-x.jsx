import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc_3m-lqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xc_3m-lqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:screen-share-x"} {...others} />);
}

export default Component;
