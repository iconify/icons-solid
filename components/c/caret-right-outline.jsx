import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1ot5pd2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c1ot5pd2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:caret-right-outline"} {...others} />);
}

export default Component;
