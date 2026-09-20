import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3jvjrbaz.css';
import '../../css/d/d9k27_-5v.css';
import '../../css/n/n1h2j9b4e.css';
import '../../css/x/x-d4y8bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b3jvjrbaz"/><path class="d9k27_-5v"/><path class="n1h2j9b4e"/><path class="x-d4y8bfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cby"} {...others} />);
}

export default Component;
