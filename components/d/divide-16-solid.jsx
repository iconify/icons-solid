import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq53nzb0t.css';
import '../../css/d/dnwwjhmil.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fq53nzb0t"/><path class="dnwwjhmil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:divide-16-solid"} {...others} />);
}

export default Component;
