import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dor5b2bew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dor5b2bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:infinity-duotone"} {...others} />);
}

export default Component;
