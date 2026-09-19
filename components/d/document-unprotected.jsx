import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyolqcc_l.css';
import '../../css/s/s28o31bys.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yyolqcc_l"/><path class="s28o31bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-unprotected"} {...others} />);
}

export default Component;
