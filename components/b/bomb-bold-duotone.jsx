import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/v1i9zeb3v.css';
import '../../css/q/q27aehs6m.css';
import '../../css/l/l-h5hnbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="v1i9zeb3v"/><path class="q27aehs6m"/></g><path class="l-h5hnbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-bold-duotone"} {...others} />);
}

export default Component;
