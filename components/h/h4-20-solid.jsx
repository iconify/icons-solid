import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3mbkdb_l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p3mbkdb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:h4-20-solid"} {...others} />);
}

export default Component;
