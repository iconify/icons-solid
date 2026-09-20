import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsg1p1yyq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsg1p1yyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-directory-open-fill-24"} {...others} />);
}

export default Component;
