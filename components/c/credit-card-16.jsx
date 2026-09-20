import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uws-23bsl.css';
import '../../css/d/d83mplq2z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uws-23bsl"/><path class="d83mplq2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:credit-card-16"} {...others} />);
}

export default Component;
