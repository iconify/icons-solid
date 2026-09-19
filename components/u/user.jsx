import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7daywb0g.css';
import '../../css/m/m8bpqrxix.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="a7daywb0g"/><path class="m8bpqrxix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:user"} {...others} />);
}

export default Component;
