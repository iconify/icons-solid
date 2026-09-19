import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sei1hna7r.css';
import '../../css/b/b2of3ebrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sei1hna7r"/><path class="b2of3ebrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:algolia"} {...others} />);
}

export default Component;
