import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei34isb5x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ei34isb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-sitting-in-steam-sauna"} {...others} />);
}

export default Component;
