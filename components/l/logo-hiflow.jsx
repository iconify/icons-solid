import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck-rj9bgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ck-rj9bgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-hiflow"} {...others} />);
}

export default Component;
