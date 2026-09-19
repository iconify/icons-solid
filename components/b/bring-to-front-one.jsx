import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqd0yrbhc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tqd0yrbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bring-to-front-one"} {...others} />);
}

export default Component;
