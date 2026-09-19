import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnf3cs2wa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnf3cs2wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sorting-right-thin"} {...others} />);
}

export default Component;
