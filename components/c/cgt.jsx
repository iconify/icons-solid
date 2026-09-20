import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5l1xgljl.css';
import '../../css/e/ec-xsg-ku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5l1xgljl"/><path class="ec-xsg-ku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cgt"} {...others} />);
}

export default Component;
