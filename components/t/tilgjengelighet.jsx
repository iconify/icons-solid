import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aeyw3hn-y.css';
import '../../css/f/fdorp31hk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aeyw3hn-y"/><path class="fdorp31hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tilgjengelighet"} {...others} />);
}

export default Component;
