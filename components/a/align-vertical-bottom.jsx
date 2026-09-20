import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic5m1gpux.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="ic5m1gpux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:align-vertical-bottom"} {...others} />);
}

export default Component;
