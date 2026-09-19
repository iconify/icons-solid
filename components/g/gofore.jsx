import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puo94vz7x.css';

const viewBox = {"width":400,"height":512};
const content = `<path class="puo94vz7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:gofore"} {...others} />);
}

export default Component;
