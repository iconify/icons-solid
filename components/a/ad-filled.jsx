import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0-bq5bbi.css';
import '../../css/r/r_ni-0b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z0-bq5bbi"/><path clip-rule="evenodd" class="r_ni-0b-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ad-filled"} {...others} />);
}

export default Component;
