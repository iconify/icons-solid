import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnp3iub6s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bnp3iub6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:table-with-chairs"} {...others} />);
}

export default Component;
