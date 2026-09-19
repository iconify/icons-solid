import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o21yy6bel.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="o21yy6bel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:bandcamp"} {...others} />);
}

export default Component;
