import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cya1rgi2m.css';
import '../../css/s/s7ta3byys.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="cya1rgi2m"/><path class="s7ta3byys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wifi-off"} {...others} />);
}

export default Component;
