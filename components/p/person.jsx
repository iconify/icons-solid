import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4g3ob5-z.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="c4g3ob5-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:person"} {...others} />);
}

export default Component;
