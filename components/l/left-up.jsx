import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyqta459c.css';
import '../../css/i/i1nvd4bat.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yyqta459c"/><path class="i1nvd4bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:left-up"} {...others} />);
}

export default Component;
