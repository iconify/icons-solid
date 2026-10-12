import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exe5mchjt.css';
import '../../css/f/f4f8fe34r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exe5mchjt"/><path class="f4f8fe34r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-arrow-down-filled"} {...others} />);
}

export default Component;
