import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmsn-19xf.css';
import '../../css/b/beajqbc6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmsn-19xf"/><path class="beajqbc6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:finger-swipe-right"} {...others} />);
}

export default Component;
