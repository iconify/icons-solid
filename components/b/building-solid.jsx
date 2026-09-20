import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n89zesbhu.css';
import '../../css/p/pgc70abwx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="n89zesbhu"/><path class="pgc70abwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:building-solid"} {...others} />);
}

export default Component;
