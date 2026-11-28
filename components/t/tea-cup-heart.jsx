import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bte9woctn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bte9woctn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:tea-cup-heart"} {...others} />);
}

export default Component;
