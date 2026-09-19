import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdwunab8w.css';
import '../../css/h/hjv1atbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tdwunab8w"/><path class="hjv1atbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:lemon"} {...others} />);
}

export default Component;
