import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gml9_ib2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gml9_ib2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-pull-request-create-filled"} {...others} />);
}

export default Component;
