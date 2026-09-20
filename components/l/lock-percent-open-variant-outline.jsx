import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo8123eqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bo8123eqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:lock-percent-open-variant-outline"} {...others} />);
}

export default Component;
