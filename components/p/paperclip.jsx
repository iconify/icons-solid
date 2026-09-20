import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjy585wqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hjy585wqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:paperclip"} {...others} />);
}

export default Component;
