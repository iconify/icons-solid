import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrpo3ub4o.css';
import '../../css/j/jk5lh3bsw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yrpo3ub4o"/><path class="jk5lh3bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-snapchat"} {...others} />);
}

export default Component;
