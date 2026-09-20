import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4jf7jyqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4jf7jyqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:category-active"} {...others} />);
}

export default Component;
