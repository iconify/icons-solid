import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/beajqbc6h.css';
import '../../css/g/gfumbbcog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="beajqbc6h"/><path class="gfumbbcog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:finger-swipe-right-filled"} {...others} />);
}

export default Component;
