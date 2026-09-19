import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfr5h3cft.css';
import '../../css/b/b4j54ubbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cfr5h3cft"/><path class="b4j54ubbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chevrons-left"} {...others} />);
}

export default Component;
