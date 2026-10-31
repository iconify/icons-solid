import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuwj-qb1k.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="cuwj-qb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arc-third-20-solid"} {...others} />);
}

export default Component;
