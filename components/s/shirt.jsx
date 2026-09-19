import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py9hl5bvu.css';
import '../../css/v/v6af_xb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="py9hl5bvu"/><path class="v6af_xb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:shirt"} {...others} />);
}

export default Component;
