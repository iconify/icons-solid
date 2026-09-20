import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjv3jqbyi.css';
import '../../css/q/qylci8b3v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cjv3jqbyi"/><path class="qylci8b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:gift-card"} {...others} />);
}

export default Component;
