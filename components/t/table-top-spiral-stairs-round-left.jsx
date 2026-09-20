import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szs_rdb5l.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="szs_rdb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-spiral-stairs-round-left"} {...others} />);
}

export default Component;
